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
		<blockquote><strong>What is a Nom Finder?</strong> Food trucks are awesome - they bring so many options to spice up our weekly routines; but by their nature, they can be moving targets and it's a bummer to miss out and not know when the next time you'll see your favorite truck again. It's hard to remember to take a break and eat let alone keep up with different trucks' schedules! Nom Finder tries to take the logistics out of lunch and dinner so you can focus on looking forward to your next nom. Browse through your favorite food trucks' menu, view their upcoming events and locations, and add events you're interested in to your fav list!</blockquote>
	    </div>
	</div>
    );
  }

}

export default HomePage;
