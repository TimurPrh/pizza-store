import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AdminForm = ({addingForm, message, form}) => {
  const [selectedType, setSelectedType] = useState({})
  const [selectedTypeVisible, setSelectedTypeVisible] = useState(false)

  const addingStatus = useSelector(state => state.adminAddingReducer.status)
  const addingType = useSelector(state => state.adminAddingReducer.type)
  const addingMenuItem = useSelector(state => state.adminAddingReducer.menuItem)
  const availableTypes = useSelector(state => state.adminAddingReducer.availableTypes)

  useEffect(() => {
    if (addingStatus === 'change-type-form' && addingType) {
      form.current[0].value = addingType.type
      form.current[1].value = addingType.name
    } else if (addingStatus === 'change-menu-form' && addingMenuItem) {
      const typeIndex = availableTypes.findIndex(el => el.id === addingMenuItem.typeid)
      setSelectedType(availableTypes[typeIndex])
      console.group('set item type')
      console.log(availableTypes[typeIndex])
      console.groupEnd()
      form.current[0].value = availableTypes[typeIndex].name
      const offset = availableTypes.length
      form.current[2 + offset].value = addingMenuItem.name
      form.current[3 + offset].value = addingMenuItem.description
      form.current[4 + offset].value = addingMenuItem.price
    }
  }, [addingStatus, addingType, addingMenuItem])

  const onTypeChange = (type) => {
    setSelectedTypeVisible(false)
    setSelectedType(type)
  }

  let formContent

  if (addingForm === 'type') {
    formContent = (
      <>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Тип</div>
          <input className='admin-modal__input' name='type' type="text" />
        </label>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Название</div>
          <input className='admin-modal__input' name='name' type="text" />
        </label>
        {message}
      </>
    )
  } else if (addingForm === 'menu') {
    formContent = (
      <>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Тип</div>
          <input
            type='button'
            onClick={() => setSelectedTypeVisible(prev => !prev)}
            className="admin-modal__input"
            name='typeid'
            value={selectedType.name ? selectedType.name : 'Выберете тип'}>
          </input>
          <input
            style={{display: 'none'}}
            name='typeid'
            value={selectedType.id ? selectedType.id : ''}>
          </input>
          <div 
            className={selectedTypeVisible ? 
            "admin-modal__option-menu admin-modal__option-menu_visible"
            :
            "admin-modal__option-menu"}>
            {
              availableTypes.map(type => 
                <button 
                key={type.id}
                type='button'
                onClick={(e) => onTypeChange(type)}
                className="admin-modal__option-item"
                >{type.name}</button>
              )
            }
          </div>
        </label>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Название</div>
          <input className='admin-modal__input' name='name' type="text" />
        </label>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Описание</div>
          <textarea className='admin-modal__textarea' name='description' type="text" />
        </label>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Цена</div>
          <input className='admin-modal__input' name='price' type="text" />
        </label>
        <label className='admin-modal__label'>
          <div className='admin-modal__label-text'>Изображение</div>
          <input className='admin-modal__input' name='img' type="file" />
        </label>
        {message}
      </>
    )
  }

  return (
    <form ref={form} className="admin-modal__add-form">
      {formContent}
    </form>
  )
}

export default AdminForm;