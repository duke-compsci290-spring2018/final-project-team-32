  import * as firebase from 'firebase/app'
  // import 'firebase/auth'
  import 'firebase/firestore'
  import 'firebase/database'


const config = {
    apiKey: "AIzaSyCZmIoSPSaEfsUfavHkWxNvYD0Dwa_KnHg",
    authDomain: "oda-finalproject.firebaseapp.com",
    databaseURL: "https://oda-finalproject.firebaseio.com",
    projectId: "oda-finalproject",
    storageBucket: "oda-finalproject.appspot.com",
    messagingSenderId: "990993507934"
};

  

!firebase.apps.length ? firebase.initializeApp(config) : ''

// export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase