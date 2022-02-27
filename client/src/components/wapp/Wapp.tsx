import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Menu } from '../food/Menu';
import { Home } from '../home/Home';
import { Info } from '../info/Info';
import { NavBar } from '../nagivation/NavBar';
import { selectPageUser } from '../nagivation/NavigationSlice';
import { WappMap } from '../map/WappMap'
import { selectFamilyName, selectUserGuests, userLogout } from '../user/userSlice';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import { Guest } from '../../models/Guest';

export function Wapp() {

  const page = useAppSelector(selectPageUser);
  const guests = useAppSelector(selectUserGuests);
  const family = useAppSelector(selectFamilyName);
  const [activeGuest, setActiveGuest] = useState<Guest | undefined>(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setLoginContext } = useContext(AuthContext);

  function logout() {
    dispatch(userLogout()).then(() => navigate(""));
    setLoginContext(undefined);
  } 

  return (
    <div>
      <NavBar page={page}/>
      {/* <div className='debug-vbar'></div> */}
      {
        page === 'home' &&
        <div>
          <Home family={family} guests={guests} setActiveGuest={setActiveGuest}/>
          <button onClick={() => logout()}>Logout</button>
        </div>
      }
      {
        page === 'meal' &&
        <Menu family={family} guests={guests} activeGuest={activeGuest}/>
      }
      {
        page === 'info' &&
        <Info/>
      }
      {
        page === 'location' &&
        <WappMap/>
      }
      
    </div>
  );
}
