import firebase from './firebaseApp.js'
global.currentRole = ''

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('users/'+ userId).child('role').once('value').then(function(snapshot){
        currentRole = snapshot.val();
      });
      console.log("user signed in!");
// User is signed in.
    } else {
      console.log("user not signed in!")
// No user is signed in. Show Sign in methods or Auth anonymously 
    }
  });
export default currentRole
