import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyAUPSDM3jpIH-SMuKMJ3mKAkB4kD8Qxi6w",
  authDomain: "whatsapp-clone-8ca76.firebaseapp.com",
  projectId: "whatsapp-clone-8ca76",
  storageBucket: "whatsapp-clone-8ca76.appspot.com",
  messagingSenderId: "666445434509",
  appId: "1:666445434509:web:527ba149875d825e1f9cc4",
  measurementId: "G-B2W507CKPH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
