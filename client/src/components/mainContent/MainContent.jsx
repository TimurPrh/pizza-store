import { useSelector } from 'react-redux';
import MenuList from '../menuList/MenuList';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import './mainContent.scss'

const MainContent = () => {
  const { status } = useSelector(state => state.menuReducer)

  let content = null

  if (status === 'loading') {
    content = <Loading />
  } else if (status === 'error') {
    content = <Error />
  } else if (status === 'done') {
    content = <MenuList />
  }

  return (
    <div className='main-content'>
      {content}
    </div>
  );
};

export default MainContent;