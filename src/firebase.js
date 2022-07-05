import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwQRKns7wlmbFYOtzKM6SDZbc14ZyCBB8",
    authDomain: "linkedin-clone-3f85e.firebaseapp.com",
    projectId: "linkedin-clone-3f85e",
    storageBucket: "linkedin-clone-3f85e.appspot.com",
    messagingSenderId: "33975971781",
    appId: "1:33975971781:web:a8775ec9174a5838fde5ac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };  