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
  let headTextArray = [
    "Conotoxins are bioactive peptides found in the venom that marine cone snails produce for prey capture and defense. They are used as pharmacological tools to study pain signalling and have the potential to become a new class of analgesics. To date, more than 10,000 conotoxin sequences have been discovered.", 

    "Scorpion venom is the most expensive and deadly venom with medical prospects. A number of scorpion venom peptides have shown promising site specificity and are involved in the regulation of biological mechanisms. Due to the structural and functional specificity, the scorpion peptides are widely used for the development of specific drugs especially for the cardiovascular and other immune diseases. ", 

    "Paclitaxel production starts with harvesting plantation-grown yew trees. Producing paclitaxel, the naturally derived cancer drug, requires a rare combination of farming and chemistry skills. The drug's raw material, the yew tree, is grown on plantations or gathered in the wild.", 

    "Spider venoms are known to contain proteins and polypeptides that perform various functions including antimicrobial, neurotoxic, analgesic, cytotoxic, necrotic, and hemagglutinic activities. Currently, several classes of natural molecules from spider venoms are potential sources of chemotherapeutics against tumor cells.",

    "f you’ve never heard of hoodia (or hoodia gordonii as it is also known), then consider this your wake-up call. Once you learn why this organic weight loss supplement has been touted as the next miracle diet pill, you might be wondering why hoodia is not yet a part of your diet routine."
  ];
  let headUrlArray = ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5744117/", "https://www.pnas.org/content/117/19/10100","https://www.jstor.org/stable/10.26506/pharmhist.62.1-2.0003?seq=1","https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0011234", "https://researchspace.csir.co.za/dspace/handle/10204/2539"
  ]

  let currentHeadImageNum = 0;
  
  let headImageElement = document.getElementById("head_image");
  let headTextElement = document.getElementById("head_text");
  let headUrlElement = document.getElementById("head_url");

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

    let nextHeadUrl = headUrlArray[currentHeadImageNum];
    headUrlElement.setAttribute('href', nextHeadUrl);
        // headUrlElement.href = nextHeadUrl;
    // headUrlElement.innerHTML = "Click to read more";
   
    //send msg to server
    let headobj = { "section": "head" };
    socket.emit("imageClick", headobj);
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
  
  });
  })
