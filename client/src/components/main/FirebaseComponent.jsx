import React, { useState, useEffect } from 'react';
import database from '../../firebase';
import { ref, set } from 'firebase/database';
import './FirebaseComponent.css'; 

function FirebaseComponent() {
  const [data, setData] = useState({ box1: '', box2: '' });
  const [notification, setNotification] = useState('');

  const handleButtonClick = () => {
    if (data.box1.trim() === '' || data.box2.trim() === '') {
      setNotification('Lütfen boş alan bırakmayın.');
    } else {
      const dataRef = ref(database, data.box1);
      set(dataRef, data.box2);
      setNotification('Mesaj Gönderildi.');
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
    <div className="firebase-container">
      <input
        type="text"
        value={data.box1}
        onChange={(e) => setData({ ...data, box1: e.target.value })}
        className="firebase-input"
        placeholder="Ad-Soyad"
      />
      <textarea
        value={data.box2}
        onChange={(e) => setData({ ...data, box2: e.target.value })}
        className="firebase-textarea"
        placeholder="Mesaj"
      />
      <button onClick={handleButtonClick} className="firebase-button">
        Mesaj Gönder
      </button>
      <p className={`notification ${notification ? 'show' : 'hide'}`}>
        {notification}
      </p>
    </div>
  );
}

export default FirebaseComponent;
