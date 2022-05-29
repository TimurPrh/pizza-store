import React from 'react';
import AdminMenuList from '../components/adminMenuList/AdminMenuList';
import AdminModal from '../components/adminModal/AdminModal';
import { useSelector } from 'react-redux';

const AdminPage = () => {

  const addingStatus = useSelector(state => state.adminAddingReducer.status)

  return (
    <>
      {
        addingStatus ?
          <AdminModal />
          :
          null
      }
      <div className='container'>
        <AdminMenuList />
      </div>
    </>
  );
};

export default AdminPage;