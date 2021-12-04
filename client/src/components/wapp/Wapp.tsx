import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Menu } from '../food/Menu';
import { Home } from '../home/Home';
import { Itinerary } from '../info/Itinerary';
import { NavBar } from '../nagivation/NavBar';
import { selectActivePage } from '../nagivation/NavigationSlice';
import { WappMap } from '../map/WappMap'
import { selectFamily, selectMembers, userLogout } from '../user/userSlice';
import { LoginStatus } from '../user/LoginStatus';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router';

export function Wapp() {

  const page = useAppSelector(selectActivePage);
  const members = useAppSelector(selectMembers);
  const family = useAppSelector(selectFamily);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { getUserLoggedIn } = useContext(AuthContext);

  function logout() {
    dispatch(userLogout())
    .then(() => getUserLoggedIn())
    .then(() => navigate("/"));
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
