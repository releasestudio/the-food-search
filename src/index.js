import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMI1LA_uERtWHAlq5MfKWXGducwxATOxQ",
    authDomain: "the-food-search.firebaseapp.com",
    databaseURL: "https://the-food-search.firebaseio.com",
    projectId: "the-food-search",
    storageBucket: "the-food-search.appspot.com",
    messagingSenderId: "778978889462",
    appId: "1:778978889462:web:20814c77d80840c252e6d7",
    measurementId: "G-TE8R5KE6NR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
