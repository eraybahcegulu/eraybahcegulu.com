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
      const newDataRef = push(ref(databaseRef)); // Yeni bir eşsiz anahtar oluştur
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
