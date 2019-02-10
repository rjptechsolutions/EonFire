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
//Reference messages collection
var messageRef = firebase.database().ref('messages');
// lisen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);
//submit form
function submitForm(e) {
    e.preventDefault();
    //get values
    var mail = getInputVal('email');
    var subject = getInputVal('sub');
    var msg = getInputVal('msg');
    //save msg
    saveMessage(mail, subject, msg);

    //show alert
    document.querySelector('.alert').style.display = 'block';
    // hide alert after 3sec
    setTimeout(function () {
        //show alert
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

}

//Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save msg to firebase

function saveMessage(mail, subject, msg) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        mail: mail,
        subject: subject,
        msg: msg
    });
}