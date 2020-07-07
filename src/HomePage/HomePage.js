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
		<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ut erat ornare hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ac ex faucibus, interdum metus at, varius justo. Etiam metus felis, auctor ac turpis eu, feugiat aliquet mi. 
		</p>
		<p>
		Mauris bibendum vestibulum egestas. Nulla pharetra elementum tellus id scelerisque. Donec nec nisl et massa molestie vestibulum. Morbi eleifend mi ac tortor rhoncus luctus. 
		</p>
	    </div>
	</div>
    );
  }

}

export default HomePage;
