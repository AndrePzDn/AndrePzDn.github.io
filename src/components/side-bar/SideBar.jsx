import SideBarButton from './components/SideBarButton';
import SideBarModel from './components/SideBarModel';
import userIcon from '../../assets/user-icon.png';
import projectIcon from '../../assets/project-icon.png';
import SideBarButtonsLayout from './components/SideBarButtonsLayout';

function SideBar() {
  return (
    <SideBarModel>
      <SideBarButtonsLayout />
    </SideBarModel>
  );
}

export default SideBar;
