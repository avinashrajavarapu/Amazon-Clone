import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC2LghFpSpS51-JO58Exj8KPxaXYAYOyco",
    authDomain: "clone-3c665.firebaseapp.com",
    projectId: "clone-3c665",
    storageBucket: "clone-3c665.appspot.com",
    messagingSenderId: "611089130680",
    appId: "1:611089130680:web:ff7ab8fd56f86e817b404d",
    measurementId: "G-0GRMS0093X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };