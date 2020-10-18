import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home';
import Profile from './Profile';

const Main = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
