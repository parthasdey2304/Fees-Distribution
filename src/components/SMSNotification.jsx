import React, { useState } from 'react';
import { sendSMS } from '../utils/smsService';

const SMSNotification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendSMS = async (e) => {
    e.preventDefault();
    try {
      await sendSMS(phoneNumber, message);
      alert('SMS sent successfully');
      setPhoneNumber('');
      setMessage('');
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert('Failed to send SMS');
    }
  };

  return (
    <form onSubmit={handleSendSMS}>
      <h3>Send SMS Notification</h3>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
      />
      <button type="submit">Send SMS</button>
    </form>
  );
};

export default SMSNotification;
