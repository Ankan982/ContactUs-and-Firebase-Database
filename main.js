var firebaseConfig = {
    apiKey: "AIzaSyBiRFHVY93cy4BE59A1EygHAzjtleXvytk",
    authDomain: "conatctform-f7a9e.firebaseapp.com",
    projectId: "conatctform-f7a9e",
    storageBucket: "conatctform-f7a9e.appspot.com",
    messagingSenderId: "366594640352",
    appId: "1:366594640352:web:f447de3378cb982fe64385"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference messages collection
  var messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submiteed form
function submitForm(e)
{
    e.preventDefault();
    //get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
  
    //save message
     saveMessage(name, company, email,phone,message);

    alert("Thank You !! We will get back to You!");
    
    //clear all the data from the table
    document.getElementById('contactForm').reset();

    //show alart 


}

// function to get form values

function getInputVal(id)
{
    return document.getElementById(id).value;
}


//save the message
function saveMessage(name,company, email, phone, message)
{
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}