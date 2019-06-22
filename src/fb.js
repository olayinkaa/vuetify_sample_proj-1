import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvPWobtsYK5c3Hxt4LnIanBdBtBTaqZBg",
    authDomain: "vuetify-sample-proj.firebaseapp.com",
    databaseURL: "https://vuetify-sample-proj.firebaseio.com",
    projectId: "vuetify-sample-proj",
    storageBucket: "vuetify-sample-proj.appspot.com",
    messagingSenderId: "863984736329",
    appId: "1:863984736329:web:3ec8848554de5705"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true})


  export default db;