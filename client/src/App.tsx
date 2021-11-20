import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Wapp } from './app/Wapp';
import { Login } from './features/user/Login';
import { selectLoginState } from './features/user/userSlice'
import diamond from "./resources/diamond-white.svg"

function App() {

  const isLoggedIn = useAppSelector(selectLoginState);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {
        !isLoggedIn &&
        <div>
          <Login />
          <div className="App-header">
          <img src={diamond} className="App-logo" alt="diamond"/>
          <h1 className="initials">A | E</h1>
          </div>
        </div>
      }
      {
        isLoggedIn &&
        <Wapp />
      }
      <button onClick={() => dispatch({type: 'users/logout'})} className="button">Logout</button>
    </div>
  );
}

export default App;
