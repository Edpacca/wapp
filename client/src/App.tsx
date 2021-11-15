import React, { useState } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { Menu } from './features/food/Menu';
import { Home } from './features/home/Home';
import { NavBar } from './features/nagivation/NavBar';
import { selectActivePage } from './features/nagivation/NavigationSlice';

function App() {

  const page = useAppSelector(selectActivePage);

  return (
    <div className="App">
      <NavBar page={page}/>
      {
        page === 'home' &&
        <div>
          <Home />
          
        </div>
      },
      {
        page === 'meal' &&
        <Menu />
      }
    </div>
  );
}

export default App;
