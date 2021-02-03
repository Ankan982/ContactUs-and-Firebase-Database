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

   //on clicking the btn this will
  document.getElementById('data').addEventListener('click', retriveInfos);
 


function retriveInfos(){
    let ref  = firebase.database().ref('messages');
    ref.on("value", goData);
}

function goData(data){
  let info= data.val();
  let keys= Object.keys(info);
  for(let i=0;i<keys.length;i++)
  {
      let infoData = keys[i];
      let company= info[infoData].company;
      let email= info[infoData].email;
      let message= info[infoData].message;
      let name= info[infoData].name;
      let phone= info[infoData].phone;
    //  console.log(name,email, phone, message,company);

      let infoResult = document.querySelector(".messageResults");

      infoResult.innerHTML += `<div>
      <p><strong> Company Name: <strong/>${company}  <br>
      <a> <strong> Name: <strong/>${name} </a> <br>
      <a> <strong> Email: <strong/>${email} </a> <br>
      <a> <strong> Phone: <strong/>${phone} </a> <br>
      <a> <strong> Message: <strong/>${message} </a> <br>
      </p>
      </div>`;

  }
}