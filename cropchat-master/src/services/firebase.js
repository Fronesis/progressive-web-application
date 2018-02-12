import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDqFH26k53VB2AernTHm8u-8lRTwSa-7OA',
  authDomain: 'crpchat.firebaseapp.com',
  databaseURL: 'https://crpchat.firebaseio.com',
  projectId: 'crpchat',
  storageBucket: 'crpchat.appspot.com',
  messagingSenderId: '368720121643'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
