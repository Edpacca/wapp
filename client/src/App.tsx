import './App.css';
import { Wapp } from './components/wapp/Wapp';
import { AdminHome } from './components/admin/AdminHome';
import { Login } from './components/user/Login';
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
