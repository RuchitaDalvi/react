import React from 'react';
import "./ContactForm.css";
import { Link, useNavigate } from 'react-router-dom';

function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass input data as parameters when navigating to the "Thank You" page
    navigate(`/thankyou?name=${name}&email=${email}&message=${message}`);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
