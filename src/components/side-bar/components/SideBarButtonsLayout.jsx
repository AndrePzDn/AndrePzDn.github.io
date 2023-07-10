import userIcon from '../../../assets/user-icon.png';
import projectIcon from '../../../assets/project-icon.png';
import SideBarButton from './SideBarButton';
import moneyIcon from '../../../assets/money-icon.png';

function SideBarButtonsLayout() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <SideBarButton image={projectIcon} text='Proyectos' alt='User Icon' />
      <SideBarButton image={moneyIcon} text='Balance' alt='User Icon' />
      <SideBarButton image={projectIcon} text='Project' alt='User Icon' />
    </div>
  );
}

export default SideBarButtonsLayout;
