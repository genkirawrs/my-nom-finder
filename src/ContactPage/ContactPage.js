import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ContactPage.css';

class ContactPage extends Component {

  render(){ 
    return(
        <div className="contact-page">
            <h4>Drop Us a Line</h4>
      <form className='ContactForm'>
        <div className='name'>
          <label htmlFor='RegistrationForm_name'>
            Name
          </label>
          <input
            name='name'
            type='text'
            required
            id='RegistrationForm_name'/>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm_email'>
            Email
          </label>
          <input
            name='email'
            type='text'
            required
            id='RegistrationForm_email'/>
        </div>
        <div className='subject'>
          <label htmlFor='RegistrationForm_subject'>
            Subject 
          </label>
          <input
            name='subject'
            type='text'
            required
            id='RegistrationForm_subject'/>
        </div>
        <div className='message'>
          <label htmlFor='RegistrationForm_message'>
            Message
          </label>
          <textarea
            name='message'
            required
            id='RegistrationForm_message'>
	  </textarea>
        </div>
        <input type='submit' value='Send'/>
      </form>
        </div>
    );
  }

}

export default ContactPage;
