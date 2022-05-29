import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenuType, deleteMenuType, postMenuTypes } from '../../http';
// import { useNavigate } from 'react-router-dom';
import { resetAdminStatusAction, setAdminDoneAction, setAdminErrorAction, setAdminLoadingAction } from '../../store/adminAddingStore';
import './adminModal.scss'

const AdminModal = () => {
  const addingStatus = useSelector(state => state.adminAddingReducer.status)
  const addingType = useSelector(state => state.adminAddingReducer.type)

  const modalRef = useRef(null)
  const form = useRef(null)
  let closeTimer

  const dispatch = useDispatch()

  useEffect(() => {
    if (addingStatus === 'change-type-form' && addingType) {
      console.dir(form.current[0].value)
      console.dir(form.current[1].value)
      console.log('adding type')
      console.log(addingType)
      form.current[0].value = addingType.type
      form.current[1].value = addingType.name
    }
  }, [addingStatus, addingType])

  useEffect(() => {
    return () => {
      window.clearTimeout(closeTimer)
    }
  },[closeTimer])

  const addType = async (e) => {
    e.preventDefault()

    console.group('add type')
    const formData = new FormData(form.current)

    const name = formData.get('name')
    const type = formData.get('type')

    dispatch(setAdminLoadingAction())
    try {
      const res = await postMenuTypes({type, name})
      if (res) {
        console.log('ok')
        console.log(res)
        dispatch(setAdminDoneAction())
        form.current.reset()
        closeTimer = window.setTimeout(() => {
          dispatch(resetAdminStatusAction())
          console.log('timeout!!!')
        }, 5000)
      }
      
    } catch(e) {
      console.log(e)
      dispatch(setAdminErrorAction())
    }
    console.groupEnd()
  }

  const changeType = async (e) => {
    e.preventDefault()

    console.group('change type')
    const formData = new FormData(form.current)

    const name = formData.get('name')
    const type = formData.get('type')

    dispatch(setAdminLoadingAction())
    try {
      const res = await changeMenuType(addingType.id, {type, name})
      if (res) {
        console.log('ok')
        console.log(res)
        dispatch(setAdminDoneAction())
        form.current.reset()
        closeTimer = window.setTimeout(() => {
          dispatch(resetAdminStatusAction())
          console.log('timeout!!!')
        }, 5000)
      }
    } catch(e) {
      console.log(e)
      dispatch(setAdminErrorAction())
    }
    console.groupEnd()
  }

  const deleteType = async (e) => {
    e.preventDefault()

    console.group('delete type')
    dispatch(setAdminLoadingAction())
    try {
      const res = await deleteMenuType(addingType.id)
      if (res) {
        console.log('ok')
        console.log(res)
        dispatch(setAdminDoneAction())
        form.current.reset()
        closeTimer = window.setTimeout(() => {
          dispatch(resetAdminStatusAction())
          console.log('timeout!!!')
        }, 5000)
      }
    } catch(e) {
      console.log(e)
      dispatch(setAdminErrorAction())
    }
    console.groupEnd()
  }

  const reset = () => {
    dispatch(resetAdminStatusAction())
  }

  let message

  switch (addingStatus) {
    case 'add-type-form':
      message = (
        <>
          <button
            className='admin-modal__submit'
            type='submit'
            onClick={addType}
          >
            Добавить
          </button>
        </>
      )
      break;
    case 'change-type-form':
      message = (
        <>
          <button
            className='admin-modal__submit'
            type='submit'
            onClick={changeType}
          >
            Изменить
          </button>
          <button
            className='admin-modal__submit admin-modal__submit_red'
            type='submit'
            onClick={deleteType}
          >
            Удалить
          </button>
        </>
      )
      break;
    case 'loading':
      message = (
        <>
          <div className="admin-modal__subtitle">Отправка...</div>
        </>
      )
      break;
    case 'error':
      message = (
        <>
          <div className="admin-modal__subtitle">Ошибка!</div>
          <div className="admin-modal__desc">Произошла ошибка, Попробуйте позднее!</div>
        </>
      )
      break;
    case 'done':
      message = (
        <>
          <div className="admin-modal__subtitle">Меню изменено</div>
          {/* <div className="modal__desc">Наш менеджер свяжется с вами в ближайшее время!</div> */}
        </>
      )
      break;

    default:
      break;
  }

  function useOutsideCLick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          reset()
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideCLick(modalRef);

  return (
    <div className="overlay">
      <div ref={modalRef} className="modal">
        <div onClick={reset} className="modal__close">&times;</div>
        <form ref={form} className="admin-modal__add-type-form">
          <label className='admin-modal__label'>
            <div className='admin-modal__label-text'>Тип</div>
            <input className='admin-modal__input' name='type' type="text" />
          </label>
          <label className='admin-modal__label'>
            <div className='admin-modal__label-text'>Название</div>
            <input className='admin-modal__input' name='name' type="text" />
          </label>
          {message}
        </form>
        
      </div>
    </div>
  )
}

export default AdminModal;