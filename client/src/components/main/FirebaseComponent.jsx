import React, { useState, useEffect } from 'react';
import { ref, set, push } from 'firebase/database';
import databaseRef from '../../firebase';
import './FirebaseComponent.css'; 

function FirebaseComponent() {
  const [data, setData] = useState({ box1: '', box2: '' });
  const [notification, setNotification] = useState('');

  const handleButtonClick = () => {
    if (data.box1.trim() === '' || data.box2.trim() === '') {
      setNotification('Lütfen boş alan bırakmayın.');
    } else {
      const newDataRef = push(ref(databaseRef));
      const now = new Date();

      const newData = {
        ad_soyad: data.box1,
        mesaj: data.box2,
        tarih: now.toISOString(),
      };

      set(newDataRef, newData).then(() => {
        setNotification('Mesaj Gönderildi.');
      });
    }
  };

  useEffect(() => {
    let timer;

    if (notification) {
      timer = setTimeout(() => {
        setNotification('');
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [notification]);

  return (

    <fieldset className="firebase-container">
  <legend className='legend'>CONTACT</legend>
  <input
    type="text"
    value={data.box1}
    onChange={(e) => {
      const newValue = e.target.value.replace(/[^A-Za-zğĞıİöÖüÜşŞçÇ\s]/g, "");
      setData({ ...data, box1: newValue });
    }}
    className="firebase-input"
    placeholder="Name-Surname"
  />
  <textarea
    value={data.box2}
    onChange={(e) => setData({ ...data, box2: e.target.value })}
    className="firebase-textarea"
    placeholder="Message"
  />
  <button onClick={handleButtonClick} className="firebase-button">
    Send Message
  </button>
  <p className={`notification ${notification ? 'show' : 'hide'}`}>
    {notification}
  </p>
</fieldset>

  );
}

export default FirebaseComponent;
