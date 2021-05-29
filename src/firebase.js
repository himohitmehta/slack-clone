import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxbphkQOQScgO71II5zFPlC9Hj3OLVbFI",
    authDomain: "dynamic-app-clones.firebaseapp.com",
    projectId: "dynamic-app-clones",
    storageBucket: "dynamic-app-clones.appspot.com",
    messagingSenderId: "334997288032",
    appId: "1:334997288032:web:5483852152609c3e33bf05",
    measurementId: "G-RQL1NT2NLY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export const db = firebaseApp.firestore()

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}