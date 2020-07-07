import React, { Component } from 'react';

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
	    <a>Enough talk, find my nom!</a>
	</div>
    );
  }

}

export default Announcement;
