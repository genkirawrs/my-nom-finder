import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import MenuPage from './MenuPage/MenuPage';
import CalendarPage from './CalendarPage/CalendarPage';
import ContactPage from './ContactPage/ContactPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

import './App.css';

class App extends Component {

  render(){
    return (
      <div className='App'>
	<Header/>
	<Nav/>
        <main>
              <Switch>
                <Route exact path='/' key='home' component={HomePage}/>

                <Route key='menu' path='/menu' component={MenuPage}/>

                <Route key='calendar' path='/calendar' component={CalendarPage}/>

                <Route key='contact' path='/contact' component={ContactPage}/>

                <Route key='login' path='/login' component={LoginPage}/>

		<Route key='register' path='/register' component={RegisterPage}/>
              </Switch>
        </main>
	<Footer/>
      </div>
    );
  }
}

export default App;
