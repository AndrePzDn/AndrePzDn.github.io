import Book from '../../../assets/book.png';

function SideBarModel({ children }) {
  return (
    <div className='absolute text-sm'>
      <div className={`bg-gray-400 h-screen p-3 flex flex-col`}>
        <img src={Book} className='h-10 w-10 mt-2 self-center' />
        <hr className='my-4 border-black' />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default SideBarModel;
