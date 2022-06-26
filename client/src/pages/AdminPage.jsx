import React from 'react';
import AdminModal from '../components/adminModal/AdminModal';
import { useSelector } from 'react-redux';
import AdminContent from '../components/adminContent/AdminContent';

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
        <AdminContent />
      </div>
    </>
  );
};

export default AdminPage;