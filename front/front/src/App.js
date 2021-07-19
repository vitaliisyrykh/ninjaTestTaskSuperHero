import React from 'react';
import {BrowseRouter, Switch, Route, NavLink} from'react-router-dom';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';

function App() {
  return (
    <div>
      <HeroForm/>
      <HeroList/>
    </div>
  );
}

export default App;
