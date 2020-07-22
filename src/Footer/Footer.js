import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,  faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
        <footer>
          <div>Nom Finder, copyright 2020</div>
	  <div className='social-media-icons'>
		<a aria-label='facebook' title='Open facebook profile page' href='https://facebook.com'><FontAwesomeIcon icon={faFacebookSquare} className='fa-2x' aria-hidden="true"/></a>
                {' '}
                <a aria-label='instagram' title='Open instagram profile page' href='https://instagram.com'><FontAwesomeIcon icon={faInstagramSquare} className='fa-2x' aria-hidden="true"/></a>
                {' '}
                <a aria-label='twitter' title='Open twitter profile page' href='https://twitter.com'><FontAwesomeIcon icon={faTwitterSquare} className='fa-2x' aria-hidden="true"/></a>
	  </div>
        </footer>
    )
  }
}
