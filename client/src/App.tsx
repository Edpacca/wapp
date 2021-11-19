import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Wapp } from './app/Wapp';
import { Login } from './features/user/Login';
import { selectLoginState } from './features/user/userSlice'

function App() {

  const isLoggedIn = useAppSelector(selectLoginState);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {
        !isLoggedIn &&
        <Login />
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
