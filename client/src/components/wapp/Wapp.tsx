import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Menu } from '../food/Menu';
import { Home } from '../home/Home';
import { Itinerary } from '../info/Itinerary';
import { NavBar } from '../nagivation/NavBar';
import { selectPageUser } from '../nagivation/NavigationSlice';
import { WappMap } from '../map/WappMap'
import { selectFamily, selectGuests, userLogout } from '../login/userSlice';
import { LoginStatus } from '../login/LoginStatus';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router';

export function Wapp() {

  const page = useAppSelector(selectPageUser);
  const members = useAppSelector(selectGuests);
  const family = useAppSelector(selectFamily);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setLoginContext } = useContext(AuthContext);

  function logout() {
    dispatch(userLogout()).then(() => navigate("/"));
    setLoginContext(undefined);
  } 

  return (
    <div>
      <LoginStatus family={family} members={members}/>
      <NavBar page={page}/>
      {
        page === 'home' &&
        <div>
          <Home />
          
        </div>
      }
      {
        page === 'meal' &&
        <Menu />
      }
      {
        page === 'info' &&
        <Itinerary/>
      }
      {
        page === 'location' &&
        <WappMap/>
      }
      <button onClick={() => logout()} className="button">Logout</button>
    </div>
  );
}
