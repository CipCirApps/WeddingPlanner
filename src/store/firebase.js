import firebase from 'firebase'

let config={
    apiKey: "AIzaSyACdSmRstYxIbJ0pFq73WZxMC3irMf1Iws",
    authDomain: "cirwedding-fccd9.firebaseapp.com",
    databaseURL: "https://cirwedding-fccd9.firebaseio.com",
    projectId: "cirwedding-fccd9",
    storageBucket: "cirwedding-fccd9.appspot.com",
    messagingSenderId: "979671492797"      
};

firebase.initializeApp(config);

export default{
    database:firebase.database()
}
