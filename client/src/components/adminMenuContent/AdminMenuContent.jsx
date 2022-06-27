import { useDispatch, useSelector } from 'react-redux';
import { setAdminAddMenuAction, setAdminChangeMenuAction } from '../../store/adminAddingStore';
import './adminMenuContent.scss'

const AdminMenuContent = () => {
  const { types, menu, usedTypes } = useSelector(state => state.adminContentReducer)

  const dispatch = useDispatch()

  const addMenu = () => {
    dispatch(setAdminAddMenuAction({availableTypes: types}))
  }

  const changeMenu = (menuItem) => {
    dispatch(setAdminChangeMenuAction({menuItem, availableTypes: types}))
  }

  return (
    <div className='admin-menu-content'>
      {
        usedTypes.map(type => 
          <div className='admin-menu-group' key={type.type}>
            <div className='admin-menu-group__header'>
              {type.name}
            </div>
            <div className='admin-menu-list'>
              {
                menu.filter(menuItem => menuItem.typeid === type.id).map(item => 
                  <div className='admin-menu-item' key={item.id}  onClick={() => changeMenu({...item})}>
                    <div className='admin-menu-item__top'>
                      <div className='admin-menu-item__img'>
                        <img src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                      </div>
                      <div className='admin-menu-item__text'>
                        <div className='admin-menu-item__name'>
                          {item.name}
                        </div>
                        <div className='admin-menu-item__description'>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className='admin-menu-item__bottom'>
                      <div className='admin-menu-item__price'>
                        {item.price} ₽
                      </div>
                    </div>
                  </div> 
                )
              }
            </div>
          </div>
        )
      }
      <button 
        className='admin-menu-content__add'
        onClick={addMenu}>
        Добавить позицию меню
      </button>
    </div>
  );
};

export default AdminMenuContent;