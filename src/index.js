import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import { App } from './app';
import { FirebaseContext } from './context/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

//import { seedDatabase } from './seed'

const firebaseConfig = {
  apiKey: "AIzaSyBeI_Xne0l6QjylBw5CCNvuEJi_sdyt4S4",
  authDomain: "netflix-clone-dc8a6.firebaseapp.com",
  projectId: "netflix-clone-dc8a6",
  storageBucket: "netflix-clone-dc8a6.appspot.com",
  messagingSenderId: "779102495203",
  appId: "1:779102495203:web:7e9c5733c0563bcc4380d6"
}

const firebaseInit = firebase.initializeApp(firebaseConfig)
//seedDatabase(firebaseInit)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>, 
  document.getElementById('root')
);
