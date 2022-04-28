import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

function App() {
  return (
    <Routes>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
    </Routes>
  );
}

export default App;
