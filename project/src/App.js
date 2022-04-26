import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileProvider from './Context/ProfileProvider';
import Login from './Pages/Login';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path='/' component={ Login } />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
