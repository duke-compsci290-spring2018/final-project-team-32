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

  
// var currentUserName
// var currentUserAmount
// firebase.auth().onAuthStateChanged(function(user) {
//   firebase.database.ref('users/'+uid+'/name').once('value').then(function(snapshot){
//     currentUserName = snapshot.val()
// })
//   firebase.database.ref('users/'+uid+'/amount').once('value').then(function(snapshot){
//     currentUserAmount = snapshot.val()
// })

// })
!firebase.apps.length ? firebase.initializeApp(config) : ''

export var currentUserName
export var currentUserAmount
export const projectsRef = firebase.database().ref('projects')
// export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase