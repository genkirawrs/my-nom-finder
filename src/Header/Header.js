import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'

import './Header.css';


export default class Header extends Component {
  render() {
    return (
        <header>
	  <h1>
          <Link to='/'>
		Nom Finder
		{' '}
		<FontAwesomeIcon icon={faDrumstickBite}/>
	  </Link>
	  </h1>
        </header>
    )
  }
}
