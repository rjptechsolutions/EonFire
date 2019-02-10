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
var postRef = firebase.database().ref("posts");
// lisen for form submit
document.getElementById("addPosts").addEventListener("submit", submitForm);

var saveDataRef = firebase.database().ref("posts");

function submitForm(e) {
    e.preventDefault();
    //get values
    // Create a root reference
    var plink;
    var file = document.getElementById('file').files[0];
    var storageRef = firebase.storage().ref("posters/" + file.name);
    var uploadTask = storageRef.put(file);
    uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'

                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'

                break;
        }
    }, function (error) {
        // Handle unsuccessful uploads
    }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {

            var imgpath = downloadURL;

            var title = getInputVal("title");
            var city = getInputVal("city");
            var price = getInputVal("price");
            var description = getInputVal("desc");

            savePosts(title, city, imgpath, price, description);
        });
    });



    //show alert
    document.querySelector(".alert").style.display = "block";
    // hide alert after 3sec
    setTimeout(function () {
        //show alert
        document.querySelector(".alert").style.display = "none";
    }, 3000);
}

//Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

function savePosts(title, city, imgpath, price, description) {
    var newPostsRef = saveDataRef.push();
    newPostsRef.set({
        title: title,
        city: city,
        imgpath: imgpath,
        price: price,
        description: description
    });
}