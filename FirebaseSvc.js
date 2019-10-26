import firebase from 'firebase';

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: '<your-api-key>',
        authDomain: '<your-auth-domain>',
        databaseURL: 'https://<your-db-url>.firebaseio.com',
        projectId: '<your-project-id>',
        storageBucket: '<your-storage-bucket>.appspot.com',
        messagingSenderId: '<your-sender-id>',
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
