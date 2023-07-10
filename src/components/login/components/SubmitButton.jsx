import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function SubmitButton() {
  const navigate = useNavigate();
  const onClick = useCallback(
    () =>
      navigate('/projects', {
        replace: true
      }),
    [navigate]
  );

  return (
    <button
      type='submit'
      className='font-bold text-white border-2 p-2 bg-blue-400 rounded-md active:scale-90 hover:bg-blue-500 active:bg-blue-500'
      onClick={onClick}
    >
      Login
    </button>
  );
}

export default SubmitButton;
