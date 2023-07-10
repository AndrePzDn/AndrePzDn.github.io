import SideBar from "../side-bar/SideBar";

function Projects() {
  return(
    <div>
      <SideBar />
      <div className='flex pl-32 pt-5 w-1/3'>
        <button>
          <div className='flex flex-row border-2 border-gray-500 rounded-md p-2 items-center'>
            <div className='text-center p-4'>
              <h1 className='font-bold'>ID Number</h1>
              00001
            </div>
            <div className='text-center p-4'>
            <h1 className='font-bold'>Project Name</h1>
            <p>Status</p>
            <p>Empresa</p>
            <p>Cliente</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Projects;
