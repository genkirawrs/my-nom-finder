import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
  state = {currentPage: 'home'}

  render(){
    return (
      <nav className='Nav'>
        <ul>
 	  <li>
            { this.state.currentPage === 'menu' ?
                <Link className='current-page' to={'/menu'} onClick={() => this.setState({ currentPage: 'menu' })}>Menu</Link>
                :
                <Link to={'/menu'} onClick={() => this.setState({ currentPage: 'menu' })}>Menu</Link>
            }
	  </li>
	  <li>
            { this.state.currentPage === 'calendar' ?
                <Link className='current-page' to={'/calendar'} onClick={() => this.setState({ currentPage: 'calendar' })}>Calendar</Link>
                :
                <Link to={'/calendar'} onClick={() => this.setState({ currentPage: 'calendar' })}>Calendar</Link>
            }
	  </li>
	  <li>
            { this.state.currentPage === 'contact' ?
                <Link className='current-page' to={'/contact'} onClick={() => this.setState({ currentPage: 'contact' })}>Contact</Link>
                :
                <Link to={'/contact'} onClick={() => this.setState({ currentPage: 'contact' })}>Contact</Link>
            }
	  </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
