import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSingUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage}  />
      <Route  path='/signin' component={SignInAndSingUp}  />
    </Switch>
    </div>
  );
}

export default App;
