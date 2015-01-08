//Client File
var client = new WebSocket("ws://104.236.70.229:3000");

client.addEventListener("open", function() {
  console.log('connected');
  var names = [];
  //HTML elements
  var body = document.querySelector("body");
  var ul = document.querySelector("ul");
  var logout = document.getElementById("logout");
  var userName = document.getElementById("username");
  var userInput = document.getElementById("userinput");
  var button = document.getElementById("button");
  var input = document.getElementById("input");
  var display = document.getElementById("display");

  button.addEventListener("click", function(){

    //create messageObject with name and message
    var messageObject = {name: "Anonymous:", msg: input.value};
    //take messageObject, stringify and send to server

    //will only send something if the inputs actually have text
    if ((userName.value.trim() != "") && (input.value.trim() != "")) {
      messageObject.name = userName.value + ": ";
      //resets input boxes
      userInput.style.display = "none";
      userName.style.display = "none";
      input.value = "";
      client.send(JSON.stringify(messageObject));

      var sly = document.getElementById("sly");
      sly.style.display = "inline-block";
      var logout = document.getElementById("logout");
      logout.style.display = "inline-block";
      names.push(messageObject.name);
    }
  });//end button click function

  var submit = document.getElementById("submit");
  submit.addEventListener("click", function(){


    button.click();

  });

  // on pressing enter
  userName.addEventListener("keypress", function(){
    if(event.keyCode === 13){
      button.click();
    }
  });

  input.addEventListener("keypress", function(){
    if(event.keyCode === 13){
      button.click();
    }
  });


  var messageList = [];

  //listens for incoming messages
  client.addEventListener("message", function(message) {
    //recieves message from server and parses the data
    var newMessage = JSON.parse(message.data);

    console.log(newMessage);

    messageList.push(newMessage);

    var ul = document.querySelector("ul");
    var li = document.createElement("li");

    var nameSpan = document.createElement("span");
    var msgP = document.createElement("p");
    nameSpan.innerText = newMessage.name;
    msgP.innerText = newMessage.msg;

    li.appendChild(nameSpan);
    li.appendChild(msgP);
    //this will put the list element at the top of the list
    ul.appendChild(li);

    display.scrollTop = display.scrollHeight;

  });//end message listener








  //Sly Mode Functionality
  var sly = document.getElementById("sly");
  sly.addEventListener("click", function(){

    var messages = document.getElementsByTagName("p");
    var messageList = [];

    for (i = 0; i < messages.length; i++) {
      var elem = messages[i];
      messageList.push(elem);
    };

    messageList.forEach(function(each){
      var content = each.innerHTML;
      var coded = '';

      for (i = 0; i < content.length; i++) {

        var key = content.charCodeAt(i);
        var newKey = key + 1;
        var newLetter = String.fromCharCode(newKey);
        coded += newLetter;
      }
      each.innerHTML = coded;
    });

    sly.style.display = "none";
    unsly.style.display = "inline-block";

  });//end sly click

  var unsly = document.getElementById("unsly");
  unsly.addEventListener("click", function(){

    var messages = document.getElementsByTagName("p");
    var messageList = [];

    for (i = 0; i < messages.length; i++) {
      var elem = messages[i];
      messageList.push(elem);
    };

    messageList.forEach(function(each){
      var content = each.innerHTML;
      var coded = '';

      for (i = 0; i < content.length; i++) {

        var key = content.charCodeAt(i);
        var newKey = key - 1;
        var newLetter = String.fromCharCode(newKey);
        coded += newLetter;
      }
      each.innerHTML = coded;
    });

    unsly.style.display = "none";
    sly.style.display = "inline-block";

  });//end unsly


  var logout = document.getElementById("logout");
  logout.addEventListener("click", function(){
    location.reload();
  });


});//end open connection
