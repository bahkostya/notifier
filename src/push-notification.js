import firebase from 'firebase';

export const initializeFirebase = () => {
  const config = {
    // apiKey: 'AIzaSyC0IAzYH6VfJYYv-S2LrfbJzg1C0jEDbhQ',
    // authDomain: 'notifier-45ddd.firebaseapp.com',
    // databaseURL: 'https://notifier-45ddd.firebaseio.com',
    // projectId: 'notifier-45ddd',
    // storageBucket: 'notifier-45ddd.appspot.com',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token:', token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
