import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Menu } from '../food/Menu';
import { Home } from '../home/Home';
import { Info } from '../info/Info';
import { NavBar } from '../nagivation/NavBar';
import { selectPageUser } from '../nagivation/NavigationSlice';
import { WappMap } from '../map/WappMap'
import { selectUserFamily, selectUserGuests, userLogout } from '../user/userSlice';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import { Guest } from '../../models/Guest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { PoPolskoSwitch } from '../common/PoPolskoSwitch';

export function Wapp() {

  const page = useAppSelector(selectPageUser);
  const guests = useAppSelector(selectUserGuests);
  const family = useAppSelector(selectUserFamily) ?? {name : "", id: ""};
  const [activeGuest, setActiveGuest] = useState<Guest | undefined>(undefined);
  const [isPolish, setIsPolish] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setLoginContext } = useContext(AuthContext);

  function logout() {
    dispatch(userLogout()).then(() => navigate(""));
    setLoginContext(undefined);
  } 

  return (
    <div>
      <NavBar page={page} languageIndex={isPolish ? 1 : 0}/>
      {
        page === 'home' &&
        <>
          <PoPolskoSwitch isPolish={isPolish} setIsPolish={() => setIsPolish(!isPolish)} styleString={"right-switch"}/>
          <div>
            <Home family={family} guests={guests} setActiveGuest={setActiveGuest} languageIndex={isPolish ? 1 : 0}/>
            <button onClick={() => logout()}>Logout &nbsp; <FontAwesomeIcon icon={faDoorOpen}/></button>
          </div>
        </>
      }
      {
        page === 'meal' &&
        <Menu family={family.name} guests={guests} activeGuest={activeGuest} languageIndex={isPolish ? 1 : 0}/>
      }
      {
        page === 'info' &&
        <Info languageIndex={isPolish ? 1 : 0}/>
      }
      {
        page === 'map' &&
        <WappMap/>
      }
    </div>
  );
}
