import './App.css';
import { useAppSelector } from './app/hooks';
import { Menu } from './features/food/Menu';
import { Home } from './features/home/Home';
import { Itinerary } from './features/info/Itinerary';
import { NavBar } from './features/nagivation/NavBar';
import { selectActivePage } from './features/nagivation/NavigationSlice';
import { Map } from './features/map/Map'
import { fetchDinner, selectFamily } from './features/user/userSlice';
import { store } from './app/store';

function App() {

  const family = useAppSelector(selectFamily);
  const page = useAppSelector(selectActivePage);

  return (
    <div className="App">
      <h1>{family ? family : "not connected"}</h1>
      <button onClick={() => store.dispatch(fetchDinner())}>FETCH</button>
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
        <Map/>
      }
    </div>
  );
}

export default App;
