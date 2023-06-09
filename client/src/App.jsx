import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, LogIn, LoggedIn } from './pages';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/login'
        element={<LogIn />}
      />
      <Route
        path='/login-success/:userId'
        element={<LoggedIn />}
      />
    </Routes>
  );
}

export default App;
