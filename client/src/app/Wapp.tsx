import { useAppSelector } from '../app/hooks';
import { Menu } from '../features/food/Menu';
import { Home } from '../features/home/Home';
import { Itinerary } from '../features/info/Itinerary';
import { NavBar } from '../features/nagivation/NavBar';
import { selectActivePage } from '../features/nagivation/NavigationSlice';
import { Location } from '../features/map/Location'

export function Wapp() {

  const page = useAppSelector(selectActivePage);

  return (
    <div>
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
        <Location/>
      }
    </div>
  );
}
