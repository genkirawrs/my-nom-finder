import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Announcement.css';

class Announcement extends Component {

  render(){ 
    return(
        <div className="announcement">
	    <h4>Welcome to Nom Finder</h4>
	    <blockquote>
		Nom Finder's goal is to help you keep up with your favorite mobile restaurants' comings and goings. No more playing hide and seek with your grub! 
	    </blockquote>
	    <br/>
	    <Link to='/calendar'>Enough talk, find my nom!</Link>
	</div>
    );
  }

}

export default Announcement;
