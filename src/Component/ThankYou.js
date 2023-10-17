import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  const [searchParams] = useSearchParams();

  return (
    <div className="thank-you">
      <h2>Thank You for Your Submission!</h2>
      <p>Name: {searchParams.get('name')}</p>
      <p>Email: {searchParams.get('email')}</p>
      <p>Message: {searchParams.get('message')}</p>
    </div>
  );
}

export default ThankYou;
