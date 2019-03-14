importScripts('https://www.gstatic.com/firebasejs/5.8.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.6/firebase-messaging.js');

const config = {
  // apiKey: 'AIzaSyC0IAzYH6VfJYYv-S2LrfbJzg1C0jEDbhQ',
  // authDomain: 'notifier-45ddd.firebaseapp.com',
  // databaseURL: 'https://notifier-45ddd.firebaseio.com',
  // projectId: 'notifier-45ddd',
  // storageBucket: 'notifier-45ddd.appspot.com',
  messagingSenderId: '709823223699'
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
