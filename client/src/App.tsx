import './App.css';
import { Wapp } from './components/wapp/Wapp';
import { AdminHome } from './components/admin/AdminHome';
import { Login } from './components/login/Login';
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
          !loginContext &&
          <Login />
        }
        {
          loginContext === 'user' &&
          <Wapp />
        }
        {
          loginContext === 'admin' &&
          <div>
            <a className="App-link" href={`${process.env.REACT_APP_CLIENT_SERVER}/admin`}>Admin Dashboard</a>
          </div>
        }
      </div>
    )
  }
}

export default App;
