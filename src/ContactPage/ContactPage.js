import React, { Component } from 'react';
import './ContactPage.css';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render(){ 
    const { status } = this.state;

    return(
        <div className="contact-page">
            <h4>Drop Us a Line!</h4>
        <form className='ContactForm' method='post' action='https://formspree.io/xjvapjpd' onSubmit={this.submitForm}>
        <div className='form-section name'>
          <label htmlFor='RegistrationForm_name'>
            Name*
          </label>
          <input
            name='name'
            type='text'
            required
            id='RegistrationForm_name'/>
        </div>
        <div className='form-section email'>
          <label htmlFor='RegistrationForm_email'>
            Email*
          </label>
          <input
            name='email'
            type='text'
            required
            id='RegistrationForm_email'/>
        </div>
        <div className='form-section subject'>
          <label htmlFor='RegistrationForm_subject'>
            Subject*
          </label>
          <input
            name='subject'
            type='text'
            required
            id='RegistrationForm_subject'/>
        </div>
        <div className='form-section message'>
          <label htmlFor='RegistrationForm_message'>
            Message*
          </label>
          <textarea
            name='message'
            required
            id='RegistrationForm_message'>
	  </textarea>
        </div>
        {status === "SUCCESS" ? <p>Thanks! Your email has been sent, talk to you soon!</p> : <input type='submit' className='submit-button' value='Send!'/>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
        </div>
    );
  }

}

export default ContactPage;
