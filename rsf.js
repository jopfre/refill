import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

import { creds } from './creds'
console.log(creds);
const firebaseApp = firebase.initializeApp(creds)

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf