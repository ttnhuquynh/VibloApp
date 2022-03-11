// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCpaFa0ttJus0AiqfonVHDaWld9gag0CGg",
	authDomain: "viblo-app-aab45.firebaseapp.com",
	projectId: "viblo-app-aab45",
	storageBucket: "viblo-app-aab45.appspot.com",
	messagingSenderId: "159921439935",
	appId: "1:159921439935:web:5bed2d1a0cb4486d82f20a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
