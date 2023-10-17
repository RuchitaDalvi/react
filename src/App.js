import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './Component/ContactForm';
import ThankYou from './Component/ThankYou';
import Profile from './Profile';
import Header from './Component/Header';

function App() {
  const [name, setName] = useState(''); // Initialize with default values
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact-form" element={<ContactForm name={name} email={email} message={message} />} />
          <Route path="/thankyou" element={<ThankYou name={name} email={email} message={message} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
