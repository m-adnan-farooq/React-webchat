
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA2gmSc1onAi-0u9uDLrw_njvHSJQN701c",
    authDomain: "aw-webchat.firebaseapp.com",
    databaseURL: "https://aw-webchat.firebaseio.com",
    projectId: "aw-webchat",
    storageBucket: "aw-webchat.appspot.com",
    messagingSenderId: "36787542568",
    appId: "1:36787542568:web:5c60a20cb7986fd373f31d"
  };

  var fire = firebase.initializeApp(firebaseConfig);


  export default fire;