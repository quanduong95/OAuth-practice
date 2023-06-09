import { AiFillGoogleCircle } from 'react-icons/ai';

const LogIn = () => {
  return (
    <>
      <button className='btn btn-primary'>
        <AiFillGoogleCircle style={{ margin: '12px', fontSize: '20px' }} />
        Sign In With Google
      </button>
    </>
  );
};

export default LogIn;
