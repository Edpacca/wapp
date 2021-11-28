import { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Wapp } from './app/Wapp';
import { AdminHome } from './features/admin/AdminHome';
import { Login } from './features/user/Login';
import { selectLoginState } from './features/user/userSlice'
import diamond from "./resources/diamond-white.svg"

function App() {

  const isLoggedIn = useAppSelector(selectLoginState);
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {
        // !isLoggedIn && !isAdmin &&
        // <Login />
      }
      {
        !isLoggedIn && !isAdmin &&
        <Wapp />
      }
      <div>
        <button onClick={() => dispatch({type: 'users/logout'})} className="button">Logout</button>
        <button onClick={() => {setIsAdmin(!isAdmin); dispatch({type: 'admin/adminLoginQuick', payload: !isAdmin})}} className="button">Admin</button>
      </div>

    </div>
  );
}

export default App;
