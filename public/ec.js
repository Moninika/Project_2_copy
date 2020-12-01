//socket
window.addEventListener('load', function () {
  //Open and connect socket
  let socket = io();
  //Listen for confirmation of connection
  socket.on('connect', function () {
    console.log("Connected");
  });

  //head
  let headImageArray = ["Head0.jpg", "Head1.jpg", "Head2.jpg", "Head3.jpg", "Head4.jpg"];
  let headTextArray = ["the conesnail venom is strong enough to kill a person. Its possible applications include...", "hello1", "hello2", "hello3","hello4"];
  let currentHeadImageNum = 0;
  
  let headImageElement = document.getElementById("head_image");
  let headTextElement = document.getElementById("head_text");

  headImageElement.addEventListener("click", function () {
    if (currentHeadImageNum == 4) {
      currentHeadImageNum = 0;
    }
    else {
      currentHeadImageNum = currentHeadImageNum + 1;
    }
    let nextHeadImage = headImageArray[currentHeadImageNum];
    headImageElement.src = nextHeadImage;
    console.log(nextHeadImage)

    let nextHeadText = headTextArray[currentHeadImageNum];
    headTextElement.innerHTML = nextHeadText;

    //send msg to server
    let headobj = { "section": "head" };
    socket.emit("imageClick", headobj);
  })

  //body
  let bodyImageArray = ["Body0.jpg", "Body1.jpg", "Body2.jpg", "Body3.jpg", "Body4.jpg"];
  let bodyTextArray = ["hello", "hello1", "hello2", "hello3","hello4"];
  let currentBodyImageNum = 0;

  let bodyImageElement = document.getElementById("body_image");
  let bodyTextElement = document.getElementById("body_text");

  bodyImageElement.addEventListener("click", function () {
    if (currentBodyImageNum == 4) {
      currentBodyImageNum = 0;
    }
    else {
      currentBodyImageNum = currentBodyImageNum + 1;
    }
    let nextBodyImage = bodyImageArray[currentBodyImageNum];
    bodyImageElement.src = nextBodyImage;
    console.log(nextBodyImage)

    let nextBodyText = bodyTextArray[currentBodyImageNum];
   bodyTextElement.innerHTML = nextBodyText;

    //send msg to the server
    let bodyobj = { "section": "body" };
    socket.emit("imageClick", bodyobj);
  })

  //feet
  let feetImageArray = ["Feet0.jpg", "Feet1.jpg", "Feet2.jpg", "Feet3.jpg", "Feet4.jpg"];
  let feetTextArray = ["hello", "hello1", "hello2", "hello3","hello4"];
  let currentFeetImageNum = 0;

  let feetImageElement = document.getElementById("feet_image");
  let feetTextElement = document.getElementById("feet_text");

  feetImageElement.addEventListener("click", function () {
    if (currentFeetImageNum == 4) {
      currentFeetImageNum = 0;
    }
    else {
      currentFeetImageNum = currentFeetImageNum + 1;
    }
    let nextFeetImage = feetImageArray[currentFeetImageNum];
    feetImageElement.src = nextFeetImage;
    console.log(nextFeetImage)

    let nextFeetText = feetTextArray[currentFeetImageNum];
    feetTextElement.innerHTML = nextFeetText;

    //send msg to server
    let feetobj = { "section": "feet" };
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
  socket.on('imageChange', function (data) {

    if (data.section == "head") {
      console.log("change head");

      if (currentHeadImageNum == 4) {
        currentHeadImageNum = 0;
      }
      else {
        currentHeadImageNum = currentHeadImageNum + 1;
      }
      let nextHeadImage = headImageArray[currentHeadImageNum];
      headImageElement.src = nextHeadImage;

      let nextHeadText = headTextArray[currentHeadImageNum];
      headTextElement.innerHTML = nextHeadText;
    }

    if (data.section == "body") {
      console.log("change body");

      if (currentBodyImageNum == 4) {
        currentBodyImageNum = 0;
      }
      else {
        currentBodyImageNum = currentBodyImageNum + 1;
      }
      let nextBodyImage = bodyImageArray[currentBodyImageNum];
      bodyImageElement.src = nextBodyImage;

      let nextBodyText = bodyTextArray[currentBodyImageNum];
      bodyTextElement.innerHTML = nextBodyText;
    }

    if (data.section == "feet") {
      console.log("change feet");

      if (currentFeetImageNum == 4) {
        currentFeetImageNum = 0;
      }
      else {
        currentFeetImageNum = currentFeetImageNum + 1;
      }
      let nextFeetImage = feetImageArray[currentFeetImageNum];
      feetImageElement.src = nextFeetImage;

      let nextFeetText = feetTextArray[currentFeetImageNum];
      feetTextElement.innerHTML = nextFeetText;
    }

  });
})