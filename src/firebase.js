import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGpoXov3N7-wmkQE_TJgd_rHoWcBs6e3Q",
    authDomain: "whatsapp-clone-36bab.firebaseapp.com",
    projectId: "whatsapp-clone-36bab",
    storageBucket: "whatsapp-clone-36bab.appspot.com",
    messagingSenderId: "187385402979",
    appId: "1:187385402979:web:6e3356440b1ef4e9a90a56",
    measurementId: "G-GE394KEXVH"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

