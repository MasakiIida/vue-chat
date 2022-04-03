import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
 apiKey: "AIzaSyDeZrBHs_Hu4LluPMM_K1idrJMNVMaXY-o",
 authDomain: "vue-chat-1d24f.firebaseapp.com",
 projectId: "vue-chat-1d24f",
 storageBucket: "vue-chat-1d24f.appspot.com",
 messagingSenderId: "151996774452",
 appId: "1:151996774452:web:01895ae9161c1bc042b261",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
