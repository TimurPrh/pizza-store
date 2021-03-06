import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenuItem, changeMenuType, deleteMenuItem, deleteMenuType, postMenuItem, postMenuType } from '../../http';
import { resetAdminStatusAction, setAdminDoneAction, setAdminErrorAction, setAdminLoadingAction } from '../../store/adminAddingStore';
import AdminForm from '../adminForm/AdminForm';
import './adminModal.scss'

const AdminModal = () => {
  const addingForm = useSelector(state => state.adminAddingReducer.form)
  const addingStatus = useSelector(state => state.adminAddingReducer.status)
  const addingType = useSelector(state => state.adminAddingReducer.type)
  const addingMenuItem = useSelector(state => state.adminAddingReducer.menuItem)
  const addingErrorMessage = useSelector(state => state.adminAddingReducer.errorMessage)

  const modalRef = useRef(null)
  const form = useRef(null)
  let closeTimer

  const dispatch = useDispatch()

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
      const res = await postMenuType({type, name})
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
      console.log(e.log)
      dispatch(setAdminErrorAction(e.res.message))
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
      console.log(e.log)
      dispatch(setAdminErrorAction(e.res.message))
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
      console.log(e.log)
      dispatch(setAdminErrorAction(e.res.message))
    }
    console.groupEnd()
  }

  const addMenu = async (e) => {
    e.preventDefault()

    console.group('add menu')
    const formData = new FormData(form.current)

    dispatch(setAdminLoadingAction())
    try {
      const res = await postMenuItem(formData)
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
      console.log(e.log)
      dispatch(setAdminErrorAction(e.res.message))
    }
    console.groupEnd()
  }

  const changeMenu = async (e) => {
    e.preventDefault()

    console.group('change type')
    let formData = new FormData(form.current)
    formData.set('id', addingMenuItem.id)

    dispatch(setAdminLoadingAction())
    try {
      const res = await changeMenuItem(formData)
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
      console.log(e.log)
      dispatch(setAdminErrorAction(e.res.message))
    }
    console.groupEnd()
  }

  const deleteMenu = async (e) => {
    e.preventDefault()

    console.group('delete menu')
    dispatch(setAdminLoadingAction())
    try {
      const res = await deleteMenuItem(addingMenuItem.id)
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
      console.log(e.log)
      dispatch(setAdminErrorAction(e.res.message))
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
            ????????????????
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
            ????????????????
          </button>
          <button
            className='admin-modal__submit admin-modal__submit_red'
            type='submit'
            onClick={deleteType}
          >
            ??????????????
          </button>
        </>
      )
      break;
    case 'add-menu-form':
      message = (
        <>
          <button
            className='admin-modal__submit'
            type='submit'
            onClick={addMenu}
          >
            ????????????????
          </button>
        </>
      )
      break;
    case 'change-menu-form':
      message = (
        <>
          <button
            className='admin-modal__submit'
            type='submit'
            onClick={changeMenu}
          >
            ????????????????
          </button>
          <button
            className='admin-modal__submit admin-modal__submit_red'
            type='submit'
            onClick={deleteMenu}
          >
            ??????????????
          </button>
        </>
      )
      break;
    case 'loading':
      message = (
        <>
          <div className="admin-modal__subtitle">????????????????...</div>
        </>
      )
      break;
    case 'error':
      message = (
        <>
          <div className="admin-modal__subtitle">????????????!</div>
          <div className="admin-modal__desc">{addingErrorMessage ? addingErrorMessage : '???????????????????? ??????????????'}</div>
        </>
      )
      break;
    case 'done':
      message = (
        <>
          <div className="admin-modal__subtitle">???????? ????????????????</div>
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
      <div ref={modalRef} className="admin-modal">
        <div onClick={reset} className="modal__close">&times;</div>
        <AdminForm addingForm={addingForm} message={message} form={form} />
      </div>
    </div>
  )
}

export default AdminModal;