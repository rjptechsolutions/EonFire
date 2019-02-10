// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWCh3DLXxWz7ES9xTa3058_lnIT8edWEA",
    authDomain: "eonfest-756df.firebaseapp.com",
    databaseURL: "https://eonfest-756df.firebaseio.com",
    projectId: "eonfest-756df",
    storageBucket: "eonfest-756df.appspot.com",
    messagingSenderId: "998309717287"
};
firebase.initializeApp(config);
// Firebase authentication 
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// lisen for form submit
document.getElementById('signout').addEventListener('click', LogOut);

function LogOut(e) {
    e.preventDefault();

    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });

}