import React, { Component } from 'react'

import './RegisterPage.css'

class RegistrationPage extends Component {

  render() {
    return (
     <div className='register-page'>
	<h4>Join the Grub Club!</h4>
      <form className='RegistrationForm'>
        <div className='email'>
          <label htmlFor='Registration_email'>
            Email
          </label>
          <input
            name='email'
            type='text'
            required
            id='Registration_email'/>
        </div>
        <div className='password'>
          <label htmlFor='Registration_password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='Registration_password'/>
        </div>
        <input type='submit' value="Register" />
      </form>
      </div>
    )
  }

}

export default RegistrationPage
