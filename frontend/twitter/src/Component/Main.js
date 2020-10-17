import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home';

const Main = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={`/:id/addComment`}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
