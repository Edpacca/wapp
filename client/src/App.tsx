import { Wapp } from './components/wapp/Wapp';
import { Admin } from './components/admin/Admin';
import { Login } from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import wizard from './assets/logos/wizard.svg';

function App() {

  const { loginContext } = useContext(AuthContext);

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserApp/>}/>
                <Route path="/admin" element={<Admin isAdmin={loginContext === 'admin'}/>}/>
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
            <a className="App-link" href={`${process.env.REACT_APP_CLIENT_SERVER}/admin`}><img src={wizard} className="wizard"/></a>
          </div>
        }
      </div>
    )
  }
}

export default App;
