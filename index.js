
// document.addEventListener('DOMContentLoaded', function() {
  
//var firebase = require("firebase-admin");

/* var config = {
    apiKey: "AIzaSyAI5SMMenVvDwLU2wB-nBy0WOzNTv9T84o",
    authDomain: "quezzy-realmo.firebaseapp.com",
    databaseURL: "https://quezzy-realmo.firebaseio.com",
    storageBucket: "gs://quezzy-realmo.appspot.com"
  }; */
  
  var config = {
    // apiKey: "AIzaSyAI5SMMenVvDwLU2wB-nBy0WOzNTv9T84o",
    // authDomain: "quezzy-realmo.firebaseapp.com",
    // databaseURL: "https://quezzy-realmo.firebaseio.com",
    // projectId: "quezzy-realmo",
    // storageBucket: "quezzy-realmo.appspot.com",
    // messagingSenderId: "643937135985",
    // appId: "1:643937135985:web:b78c0e21f81ac820091ad0",
    // measurementId: "G-46VBGBKT33"
    apiKey: "AIzaSyCYJn4SoRhKkDlBkfAy7D08KCh-O-az4h0",
    authDomain: "quizzy-a070a.firebaseapp.com",
    databaseURL: "https://quizzy-a070a.firebaseio.com",
    projectId: "quizzy-a070a",
    storageBucket: "quizzy-a070a.appspot.com",
    messagingSenderId: "214636383156",
    appId: "1:214636383156:web:fea3d25eddfc4ee57ec0e1",
    measurementId: "G-ZFJRWE2QYE"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var db = firebase.database();

  
  //console.log(db);
  console.log('Welcome');
  
  
   

    
  
 

  //console.log(usersRef);
// });

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}


// Upload file


