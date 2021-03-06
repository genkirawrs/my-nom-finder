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

import './App.css';

class App extends Component {
	
  render(){
	const pathname = window.location.pathname.substr(1)
	let path = (pathname.length > 0) ? pathname : 'home'
    return (
      <div className='App'>
	<Header/>
	<Nav pathname={path}/>
        <main>
              <Switch>
                <Route exact path='/' key='home' component={HomePage}/>

                <Route key='menu' path='/menu' component={MenuPage}/>

                <Route key='calendar' path='/calendar' component={CalendarPage}/>

                <Route key='contact' path='/contact' component={ContactPage}/>

              </Switch>
        </main>
	<Footer/>
      </div>
    )
  }
}

export default App
