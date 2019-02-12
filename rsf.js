import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

import { creds } from './creds'

const firebaseApp = firebase.initializeApp(creds)

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf