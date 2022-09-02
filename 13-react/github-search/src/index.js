import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

// Just a variable with some JSX, not a component:
const routes = (
  <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/search" element={ <Search />} />
      <Route path="/profile/:username" element={ <Profile /> } />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routes
);