import { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Wapp } from './app/Wapp';
import { AdminHome } from './features/admin/AdminHome';
import { Login } from './features/user/Login';
import { selectLoginState } from './features/user/userSlice'

function App() {

  const isLoggedIn = useAppSelector(selectLoginState);
  const dispatch = useAppDispatch();
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
      {
        isAdmin &&
        <AdminHome/>
      }
      {
        !isLoggedIn && !isAdmin &&
        <Login />
      }
      {
        isLoggedIn && !isAdmin &&
        <Wapp />
      }
      <button onClick={() => dispatch({type: 'users/logout'})} className="button">Logout</button>
      <button onClick={() => setIsAdmin(!isAdmin)} className="button">Admin</button>
    </div>
  );
}

export default App;
