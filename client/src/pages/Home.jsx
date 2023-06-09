import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className='btn btn-primary'
        onClick={() => navigate('/login')}
      >
        Sign In
      </button>
      <button className='btn btn-danger'>Sign Out</button>
    </>
  );
};

export default Home;
