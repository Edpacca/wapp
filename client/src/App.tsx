import './App.css';
import { Wapp } from './app/Wapp';
import { AdminHome } from './features/admin/AdminHome';
import { Login } from './features/user/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';

function App() {

  const { loginContext } = useContext(AuthContext);

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserApp/>}/>
                <Route path="/admin" element={<AdminHome isAdmin={loginContext === 'admin'}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );

  function UserApp() {
    return (
      <div>
        {
          loginContext === 'none' &&
          <Login />
        }
        {
          loginContext === 'user' &&
          <Wapp />
        }
      </div>
    )
  }
}

export default App;
