import React, { Component } from 'react';

import Announcement from '../Announcement/Announcement';

import './HomePage.css';

class HomePage extends Component {

  render(){
    return(
	<div className='homepage'>
	    <Announcement/>
	    <div className='home-content'>
		<h4>Hello!</h4>
		<blockquote><strong>What is a "nom"?</strong><br/>"nom" is the abbreviation of "nomnom" and is used to describe the eating of something tasty!</blockquote>
		<blockquote>Nom Finder's goal is to take the foraging out of lunch and dinner. Keep your favorite food trucks' schedule and menu options all in one spot, easy to check and easy to plan! </blockquote>
	    </div>
	</div>
    );
  }

}

export default HomePage;
