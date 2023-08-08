
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCR1mfvj0A5R9yBY0JFLzWFB1qCMlYjdwY",
  authDomain: "proyecto-final-f91d1.firebaseapp.com",
  projectId: "proyecto-final-f91d1",
  storageBucket: "proyecto-final-f91d1.appspot.com",
  messagingSenderId: "681892212856",
  appId: "1:681892212856:web:7339a7a2857aa9fe187d8d"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);