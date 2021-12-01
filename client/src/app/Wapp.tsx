import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Menu } from '../features/food/Menu';
import { Home } from '../features/home/Home';
import { Itinerary } from '../features/info/Itinerary';
import { NavBar } from '../features/nagivation/NavBar';
import { selectActivePage } from '../features/nagivation/NavigationSlice';
import { WappMap } from '../features/map/WappMap'
import { selectMembers, userLogout } from '../features/user/userSlice';
import { LoginStatus } from '../features/user/LoginStatus';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export function Wapp() {

  const page = useAppSelector(selectActivePage);
  const members = useAppSelector(selectMembers);
  const dispatch = useAppDispatch();

  const { getUserLoggedIn } = useContext(AuthContext);

  async function logout() {
    dispatch(userLogout());
    await getUserLoggedIn();
  }

  return (
    <div>
      <LoginStatus members={members}/>
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
