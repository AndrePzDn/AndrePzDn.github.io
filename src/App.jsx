import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Projects from './components/projects/Projects';
import SideBar from './components/side-bar/SideBar';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
