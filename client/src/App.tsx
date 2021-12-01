import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Wapp } from './app/Wapp';
import { AdminHome } from './features/admin/AdminHome';
import { Login } from './features/user/Login';
import { selectLoginState } from './features/user/userSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { selectIsAdmin } from './features/admin/adminSlice';

function App() {

  const isLoggedIn = useAppSelector(selectLoginState);
  const isAdmin = useAppSelector(selectIsAdmin);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserApp/>}/>
                <Route path="/admin" element={<AdminHome isAdmin={isAdmin}/>}/>
            </Routes>
        </BrowserRouter>
      <div>
        <button onClick={() => dispatch({type: 'users/logout'})} className="button">Logout</button>
        <button onClick={() => {dispatch({type: 'admin/adminLoginQuick', payload: false})}} className="button">Admin Logout</button>
      </div>

    </div>
  );

  function UserApp() {
    return (
      <div>
        {
          !isLoggedIn &&
          <Login />
        }
        {
          isLoggedIn &&
          <Wapp />
        }
      </div>
    )
  }
}

export default App;
