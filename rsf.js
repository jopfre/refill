import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAy-WvPAHUVZUU9ZZyVy6StLvoMXuPfDSc",
  authDomain: "refill-free.firebaseapp.com",
  databaseURL: "https://refill-free.firebaseio.com",
  projectId: "refill-free",
  storageBucket: "refill-free.appspot.com",
  messagingSenderId: "173844871125"
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf