const firebaseConfig = {
     apiKey: "AIzaSyDmIpJ5uUsqMPakOfsSbWmWRachnav-KIM",
     authDomain: "kwitter-940c3.firebaseapp.com",
     databaseURL: "https://kwitter-940c3-default-rtdb.firebaseio.com",
     projectId: "kwitter-940c3",
     storageBucket: "kwitter-940c3.appspot.com",
     messagingSenderId: "990285554031",
     appId: "1:990285554031:web:d65b083b60bb76714b089a"
   };

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="Welcome " + user_name;
function addRoom(){
      room_name = document.getElementById("kweet_room").value;
firebase.database().ref("/").child(room_name).update({
     room_name: "theroomname"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_class.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room name -" + Room_names);
row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name);
console.log(name);
window.location="kwitter_class.html";
}
function logout(){
     localStorage.removeItem("room_name");
     localStorage.removeItem("user_name");
     window.location="kwitter.html";
}