import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDppmLtncvkP74BUORjN-75TxfCLn7tkCU',
    authDomain: 'yasmin-hiasche-web.firebaseapp.com',
    projectId: 'yasmin-hiasche-web',
    storageBucket: 'yasmin-hiasche-web.appspot.com',
    messagingSenderId: '667705000750',
    appId: '1:667705000750:web:617a1707868b053e1df0bf',
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
