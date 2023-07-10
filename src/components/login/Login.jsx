import EmailField from './components/EmailField';
import PasswordField from './components/PasswordField';
import SubmitButton from './components/SubmitButton';
import bookIcon from '../../assets/book.png';

function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img
        src={bookIcon}
        alt='Book Icon'
        className='absolute top-5 left-10 h-16'
      />
      <div className='rounded-2xl p-16 sm:w-2/5 w-screen'>
        <h1 className='font-bold text-3xl text-center mb-10'>
          Log In into Balance
        </h1>
        <div className='flex flex-col justify-center items-center space-y-4 text-xl'>
          <EmailField />
          <PasswordField />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default Login;
