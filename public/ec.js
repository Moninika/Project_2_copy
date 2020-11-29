//socket
window.addEventListener('load', function () {
  //Open and connect socket
  let socket = io();
  //Listen for confirmation of connection
  socket.on('connect', function () {
      console.log("Connected");
  });
 
  //head
let headImageArray=["Head0.jpg","Head1.jpg", "Head2.jpg", "Head3.jpg", "Head4.jpg", "Head5.jpg"];

// Let Head = {"image":"text"};

let currentHeadImageNum = 0;
let headImageElement = document.getElementById("head_image");

headImageElement.addEventListener("click",function(){
  if(currentHeadImageNum ==4){
    currentHeadImageNum = 0;
  }
  else{
    currentHeadImageNum=currentHeadImageNum+1;
  }
  let nextImage = headImageArray[currentHeadImageNum];
  headImageElement.src=nextImage;
  console.log (nextImage)

  //send msg to server
  let headobj = {"section": "head"};
  socket.emit("imageClick", headobj);
})

//body
let bodyImageAray=["Body0.jpg","Body1.jpg", "Body2.jpg", "Body3.jpg", "Body4.jpg"];

let currentBodyImageNum = 0;
let bodyImageElement = document.getElementById("body_image");

bodyImageElement.addEventListener("click",function(){
  if(currentBodyImageNum ==4){
    currentBodyImageNum = 0;
  }
  else{
    currentBodyImageNum=currentBodyImageNum+1;
  }
  let nextImage = bodyImageAray[currentBodyImageNum];
  bodyImageElement.src=nextImage;
  console.log (nextImage)

  //send msg to the server
  let bodyobj = {"section": "body"};
  socket.emit("imageClick", bodyobj);
})

//feet
let feetImageAray=["Feet0.jpg","Feet1.jpg", "Feet2.jpg", "Feet3.jpg", "Feet4.jpg"];

let currentFeetImageNum = 0;
let feetImageElement = document.getElementById("feet_image");

feetImageElement.addEventListener("click",function(){
  if(currentFeetImageNum ==4){
    currentFeetImageNum = 0;
  }
  else{
    currentFeetImageNum=currentFeetImageNum+1;
  }
  let nextImage = feetImageAray[currentFeetImageNum];
  feetImageElement.src=nextImage;
  console.log (nextImage)

  //send msg to server
  let feetobj = {"section": "feet"};
  socket.emit("imageClick", feetobj);
})


  /* --- Code to RECEIVE a socket message from the server --- */
  let chatBox = document.getElementById('chat-box-msgs');

  //Listen for messages named 'msg' from the server
  socket.on('msg', function (data) {
      console.log("Message arrived!");
      console.log(data);

      //Create a message string and page element
      let receivedMsg = data.name + ": " + data.msg;
      let msgEl = document.createElement('p');
      msgEl.innerHTML = receivedMsg;

      //Add the element with the message to the page
      chatBox.appendChild(msgEl);
      //Add a bit of auto scroll for the chat box
      chatBox.scrollTop = chatBox.scrollHeight;
  });

  /* --- Code to SEND a socket message to the Server --- */
  let nameInput = document.getElementById('name-input')
  let msgInput = document.getElementById('msg-input');
  let sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', function () {
      let curName = nameInput.value;
      let curMsg = msgInput.value;
      let msgObj = { "name": curName, "msg": curMsg };
      // let msgObj = {"msg": curMsg };

      //Send the message object to the server
      socket.emit('msg', msgObj);
      // socket.emit('msg', curMsg);
  });

//change image
  socket.on('imageChange', function(data){
    
    if (data.section == "head"){
      console.log("change head");
    }
      if(currentHeadImageNum ==2){
        currentHeadImageNum = 0;
    }
  else {
    currentHeadImageNum=currentHeadImageNum+1;
  }
  let nextImage = headImageArray[currentHeadImageNum];
  headImageElement.src=nextImage;
})
   
 if (data.section == "body"){
      console.log("change body");
    }
    if(currentBodyImageNum ==2){
      currentBodyImageNum = 0;
  }
  else {
    currentBodyImageNum=currentBodyImageNum+1;
  }
  let nextImage = bodyImageArray[currentBodyImageNum];
  bodyImageElement.src=nextImage;
})

if (data.section == "feet"){
      console.log ("change feet");
    }
    if(currentFeetImageNum ==2){
      currentFeetImageNum = 0;
  }
  else {
    currentFeetImageNum=currentFeetImageNum+1;
  }
  let nextImage = feetImageArray[currentFeetImageNum];
  feetImageElement.src=nextImage;


