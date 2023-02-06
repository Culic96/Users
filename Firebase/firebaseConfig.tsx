// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDKNbX22pNGhjPXJertGIbLATV5O5kusxQ',
    authDomain: 'users-1c163.firebaseapp.com',
    projectId: 'users-1c163',
    storageBucket: 'users-1c163.appspot.com',
    messagingSenderId: '468465714636',
    appId: '1:468465714636:web:59f0cc2f977abcc8828969',
    measurementId: 'G-QS0GD653YZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

const auth = getAuth(app);

const RegisterUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const LoginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const LogoutUser = () => {
    return signOut(auth);
};

export default app;
export { LoginUser, RegisterUser, auth, LogoutUser, firestore, auctionsRef };
// const getCollection = (collectionPath: string) =>
//     collection(firestore, collectionPath);
// Firestore
const firestore = getFirestore(app);

const auctionsRef = collection(firestore, 'auctions');
// const dataPoint = (collectionPath: string) => {
//     getCollection(collectionPath);
// };
// const db = 'auctions';
