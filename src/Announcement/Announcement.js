import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Announcement.css';

class Announcement extends Component {

  render(){ 
    return(
        <div className="announcement">
	    <h4>Welcome to My Nom Finder</h4>
	    <blockquote>
		My Nom Finder helps you keep up with your mobile restaurant's comings and goings. No more playing hide and seek with your grub!
	    </blockquote>
	    <br/>
	    <Link to='/calendar'>Enough talk, find my nom!</Link>
	</div>
    );
  }

}

export default Announcement;
