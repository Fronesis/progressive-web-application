import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAG4HsCFtYd_VJM5Rmna6DCmXoDUvEGC7U',
  authDomain: 'progressive-web-applicat-5550a.firebaseapp.com',
  databaseURL: 'https://progressive-web-applicat-5550a.firebaseio.com',
  projectId: 'progressive-web-applicat-5550a',
  storageBucket: 'progressive-web-applicat-5550a.appspot.com',
  messagingSenderId: '578073831712'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
