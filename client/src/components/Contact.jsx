import React, { useState, useEffect } from 'react';
import { ref, set, push } from 'firebase/database';
import databaseRef from '../firebase';
import './Contact.css';

function Contact() {
  const [data, setData] = useState({ box1: '', box2: '' });
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const maxLengthNameSurname = 25;
  const maxLengthMessage = 100;

  const getFormattedDate = () => {
    const now = new Date();
    const date = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    return date;
  };

  const handleButtonClick = () => {
    if (isLoading) return;
  
    if (data.box1.trim().length < 3 || data.box2.trim().length < 3) {
      setNotification('Name-Surname and Message must be at least 3 characters long');
    } else {
      setIsLoading(true);
      const newDataRef = push(ref(databaseRef));
      const date = getFormattedDate();
  
      const newData = {
        ad_soyad: data.box1,
        mesaj: data.box2,
        tarih: date,
      };
  
      set(newDataRef, newData).then(() => {
        setTimeout(() => {
          setIsLoading(false);
          setNotification('Message sent.');
          setData({ box1: '', box2: '' });
        }, 5500);
      });
    }
  };

  useEffect(() => {
    let timer;

    if (notification) {
      timer = setTimeout(() => {
        setNotification('');
      }, 3500);
    }

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <fieldset className="contact-container">
      <legend className='legend font-black '> CONTACT </legend>
      <input
        type="text"
        value={data.box1}
        onChange={(e) => {
          const newValue = e.target.value.replace(/[^A-Za-zğĞıİöÖüÜşŞçÇ\s]/g, "");
          setData({ ...data, box1: newValue });
        }}
        className="contact-input"
        placeholder="Name-Surname"
        maxLength={maxLengthNameSurname}
        disabled={isLoading}
      />
      <div style={{ position: 'relative' }}>
        <textarea
          value={data.box2}
          onChange={(e) => setData({ ...data, box2: e.target.value })}
          className="contact-textarea"
          placeholder="Message"
          maxLength={maxLengthMessage}
          disabled={isLoading}
        />
        <p style={{ position: 'absolute', bottom: '-6px', right: '10px' }}>
          {maxLengthMessage - data.box2.length}/100
        </p>
      </div>
      <button
        onClick={handleButtonClick}
        className={`contact-button mt-2 ${isLoading ? 'disabled' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
      <p className={`notification ${notification ? 'show' : 'hide'}`}>
        {notification}
      </p>
    </fieldset>
  );
}

export default Contact;
