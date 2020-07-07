import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

class LoginPage extends Component {

  render(){ 
    return(
      <div className='login-page'>
        <h4>Login</h4>
      <form className='LoginForm'>
	<div className='user_name'>
          <label htmlFor='login_user_name'>
            Email
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='login_user_name'/>
        </div>
        <div className='password'>
          <label htmlFor='login_password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='login_password'/>
        </div>
        <input type='submit' value="Login"/>
	<div className="new-account-link">Don't have an account? <Link to={'/register'}>Sign Up!</Link></div>
      </form>
      </div>
    );
  }

}

export default LoginPage;
