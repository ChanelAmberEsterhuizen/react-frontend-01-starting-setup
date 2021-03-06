import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace  from './places/pages/NewPlace';
import Questions  from './questions/pages/Questions';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = ()  => {
  return (
  <Router>
    <MainNavigation /> 
    <main>
    <Switch>
<Route path= "/:userId/places"  exact >
  <UserPlaces/> 
</Route>
<Route path= "/"  exact >
  <Users/> 
</Route>
<Route path= "/questions"  exact >
<p>Please answer these questions</p>
  <Questions/> 
</Route>
<Route path= "/places/new"  exact >
  <NewPlace/> 
</Route>
<Redirect to = "/"/> 
</Switch>
</main>
  </Router>
  ); 
 }; 

export default App;
