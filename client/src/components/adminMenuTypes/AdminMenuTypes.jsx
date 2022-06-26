import { useDispatch } from 'react-redux';
import { setAdminAddTypeAction, setAdminChangeTypeAction } from '../../store/adminAddingStore';
import './adminMenuTypes.scss'

const AdminMenuTypes = ({types}) => {
  const dispatch = useDispatch()

  const addType = () => {
    dispatch(setAdminAddTypeAction())
  }

  const changeType = (type) => {
    dispatch(setAdminChangeTypeAction(type))
  }

  return (
    <div className='admin-menu-types'>
      {
        types.map(item => 
          <div key={item.id} className='admin-menu-types__item' onClick={() => changeType({...item})}>
            {item.name}
          </div>
        )
      }
      <button 
        className='admin-menu-types__add'
        onClick={addType}>
        Добавить тип 
      </button>
    </div>
  );
};

export default AdminMenuTypes;