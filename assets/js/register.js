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
//Reference messages collection for Registration form
var registrationRef = firebase.database().ref('registration');

// lisen for form submit
document.getElementById('regForm').addEventListener('submit', submitRegForm);
//submit form
function submitRegForm(e) {
    e.preventDefault();
    //get values

    var name = getInputVal('uname');
    var mail = getInputVal('email');
    var event_name = getInputVal('evtname');
    var phone = getInputVal('phone');
    //save msg
    saveRegistration(name, mail, event_name, phone);

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
function saveRegistration(name, mail, event_name, phone) {
    var newregistrationRef = registrationRef.push();
    newregistrationRef.set({
        name: name,
        mail: mail,
        event_name: event_name,
        phone: phone
    });
}