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

  //body
  let bodyImageArray = ["Body0.jpg", "Body1.jpg", "Body2.jpg", "Body3.jpg", "Body4.jpg"];
  let bodyTextArray = [
    "The Rosy Periwinkle plant from Madagascar gives us two very important cancer-fighting medicines: vinblastine and vincristine. Vincristine has helped increase the chance of surviving childhood leukaemia from 10% to 90%, while vinblastine is used to treat Hodgkins' Disease.", 

    "Snake venom is providing new information about how drugs work. fast acting, so potent and highly specific to its target, venom has all of the ingredients necessary for making a drug that is effective for pain but also non-addictive.", 

    "The black widow spider materials, including the venom, eggs, and spider body tissues, can be deemed as a valuable library of biologically active molecules. Inquiries into the venoms and toxins have major significance not only in treatment of the latrodectism, but also in pharmaceutical research and tool reagent development which is supposed to be helpful to elucidate pathological and physiological processes.", 

    "Marine sponges have been considered as a drug treasure house with respect to great potential regarding their secondary metabolites. Most of the studies have been conducted on sponge’s derived compounds to examine its pharmacological properties. Such compounds proved to have antibacterial, antiviral, antifungal, antimalarial, antitumor, immunosuppressive, and cardiovascular activity.",

    "Hoodia Gordoni is a cactus-like succulent plant, native to the Kalahari Desert in southern Africa. Due to over harvesting by pharmaceutical companies and slow growth, Hoodia is now considered an endangered species. Hoodia grows in clumps of upright stems with tan flowers and thorns, and a strong, unpleasant odor."
  ];


  let bodyUrlArray = ["https://www.sciencedaily.com/releases/2018/05/180503142809.htm","https://www.bbcearth.com/blog/?article=how-venoms-are-shaping-medical-advances"]

  let currentBodyImageNum = 0;

  let bodyImageElement = document.getElementById("body_image");
  let bodyTextElement = document.getElementById("body_text");
  let bodyUrlElement = document.getElementById("body_url");

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

   let nextBodyUrl = bodyUrlArray[currentBodyImageNum];
   bodyUrlElement.setAttribute('href', nextBodyUrl);

    //send msg to the server
    let bodyobj = { "section": "body" };
    socket.emit("imageClick", bodyobj);
  })

  //feet
  let feetImageArray = ["Feet0.jpg", "Feet1.jpg", "Feet2.jpg", "Feet3.jpg", "Feet4.jpg"];
  let feetTextArray = [
      "The current review comprehensively summarized the nutritional qualities, functional food attributes, and bioactive properties of these organisms. Among the phylum mollusca, Cephalopoda, Bivalvia, and Gastropoda were mostly reported for their nutraceutical applications and bioactive properties.", 

      "Scorpion venom is the most expensive and deadly venom with medical prospects. A number of scorpion venom peptides have shown promising site specificity and are involved in the regulation of biological mechanisms. Due to the structural and functional specificity, the scorpion peptides are widely used for the development of specific drugs especially for the cardiovascular and other immune diseases. ", 

      "Sea snails that hunt fish by spitting tiny venom-tipped harpoons at them are being used to develop life-saving medicines. One group of scientists has already succeeded in pinpointing a new long-lasting anaesthetic and others have created a powerful, non-addictive painkiller from the snail poison. cone snail toxins offer particular promise in the development of drugs for treating stroke victims, pain, and diabetes.", 

      "The Hoodia Gordoni cactus, native to South Africa, has recently come to the fore of the debate surrounding bioprospecting and intellectual property rights. The cactus, native to the Kalahari Desert, has been used for centuries by the hunter-gatherer San speaking tribes of the region to stave off hunger and thirst. Scientists from the South African Council for Scientific and Industrial Affairs learned of the Hoodia's properties and patented the Active ingredients for lucrative drug research.",

      "The structure of a peptide, known as ShK toxin, is derived from a Caribbean sea anemone. This peptide was found to be a potent blocker of the voltagegated potassium channel Kv1.3 present in a type of white blood cell known as T-cells. The potential application include treatment for Multiple Sclerosis."
    ];
  let currentFeetImageNum = 0;

  let feetImageElement = document.getElementById("feet_image");
  let feetTextElement = document.getElementById("feet_text");
  let feetUrlElement = document.getElementById("feet_url");

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