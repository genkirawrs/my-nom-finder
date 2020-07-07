import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav(props) {
  return (
    <nav className='Nav'>
      <ul>
	<li>
          <Link to={'/'}>
            Home
          </Link>
	</li>
	<li>
          <Link to={'/menu'}>
            Menu
          </Link>
	</li>
	<li>
          <Link to={'/calendar'}>
            Calendar
          </Link>
	</li>
	<li>
          <Link to={'/contact'}>
            Contact
          </Link>
	</li>
	<li>
          <Link to={'/login'}>
            Sign In
          </Link>
	</li>
      </ul>
    </nav>
  );
}
