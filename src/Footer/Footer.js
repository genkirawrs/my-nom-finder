import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,  faInstagramSquare, faTwitterSquare, faYelp} from '@fortawesome/free-brands-svg-icons'

import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
        <footer>
          <div>Nom Finder, copyright 2020</div>
	  <div className='social-media-icons'>
		<Link to={'/contact'}><FontAwesomeIcon icon={faEnvelope} className='fa-2x' aria-hidden="true"/></Link>
		{' '}
		<a href='https://facebook.com'><FontAwesomeIcon icon={faFacebookSquare} className='fa-2x' aria-hidden="true"/></a>
                {' '}
                <a href='https://instagram.com'><FontAwesomeIcon icon={faInstagramSquare} className='fa-2x' aria-hidden="true"/></a>
                {' '}
                <a href='https://twitter.com'><FontAwesomeIcon icon={faTwitterSquare} className='fa-2x' aria-hidden="true"/></a>
                {' '}
                <a href='https://yelp.com'><FontAwesomeIcon icon={faYelp} className='fa-2x' aria-hidden="true"/></a>
	  </div>
        </footer>
    )
  }
}
