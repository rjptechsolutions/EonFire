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
document.getElementById('glogin').addEventListener('submit', LoginForm);
//submit form
function LoginForm(e) {
    e.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        location.replace("/client/events.html")
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });


}
