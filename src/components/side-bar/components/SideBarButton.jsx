import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function SideBarButton({ image, alt, text }) {
  const navigate = useNavigate();
  const onClick = useCallback(
    () =>
      navigate('/', {
        replace: true
      }),
    [navigate]
  );

  return (
    <div>
      <button
        className='flex flex-col items-center rounded-xl p-1 hover:bg-gray-500 active:scale-90'
        onClick={onClick}
      >
        <img src={image} className='h-10 w-10' alt={alt} />
        <p>{text}</p>
      </button>
    </div>
  );
}

export default SideBarButton;
