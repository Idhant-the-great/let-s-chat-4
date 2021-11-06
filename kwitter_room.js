const firebaseConfig = {
      apiKey: "AIzaSyAcMjlR03pYKvR4jF5hDNnKj8szdPHQnog",
      authDomain: "lets-chat-b01c4.firebaseapp.com",
      databaseURL: "https://lets-chat-b01c4-default-rtdb.firebaseio.com",
      projectId: "lets-chat-b01c4",
      storageBucket: "lets-chat-b01c4.appspot.com",
      messagingSenderId: "423302646874",
      appId: "1:423302646874:web:e424b766873d64b97e9c63",
      measurementId: "G-CPSX7E80RV"
    };
    firebase.initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+Room_names);
      row="<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
});});}
getData();

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
