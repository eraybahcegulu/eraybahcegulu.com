import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig  = {
    apiKey: "AIzaSyAqfnVVx7jcIP-tbtdYp7k3jsMYTWzaes0",
    authDomain: "eraybahcegulu-78564.firebaseapp.com",
    databaseURL: "https://eraybahcegulu-78564-default-rtdb.firebaseio.com",
    projectId: "eraybahcegulu-78564",
    storageBucket: "eraybahcegulu-78564.appspot.com",
    messagingSenderId: "888850986805",
    appId: "1:888850986805:web:142d49753e0179602d3e7c"
};

// Firebase'i başlatın
const app = initializeApp(firebaseConfig);
const databaseRef  = getDatabase(app);

export default databaseRef ;
