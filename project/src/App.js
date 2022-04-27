import React from 'react';
import { Route } from 'react-router-dom';
import ProfileProvider from './Context/ProfileProvider';
import Login from './Pages/Login';

function App() {
  return (
    <ProfileProvider>
      <Route exact path='/' component={ Login } />
    </ProfileProvider>
  );
}

export default App;
