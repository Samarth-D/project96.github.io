const firebaseConfig = {
    apiKey: "AIzaSyDgvKnQwavBw418KOlTQ0lYu2o1xhn3DdY",
    authDomain: "kwitter-project-793e4.firebaseapp.com",
    databaseURL: "https://kwitter-project-793e4-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-793e4",
    storageBucket: "kwitter-project-793e4.appspot.com",
    messagingSenderId: "213811350944",
    appId: "1:213811350944:web:9057f65789c245d7d0e8c5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
    function send(){
          msg=document.getElementById("message_box").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                msg:msg,
                like:0
          });
          document.getElementById("message_box").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["msg"];
like = message_data["like"];
name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" +like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like+"</span></button></hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}
function updateLike(message_id){
    console.log("Clicked on Like button - " + message_id);
    button_id = message_id;
    Like=document.getElementById(button_id).value;
    updated_like = Number(Like) + 1;
    firebase.database().ref(room_name).child(message_id).update({
          like : updated_like
    });
}