// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage';
import { getFireStore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'instagram-2yt.firebaseapp.com',
  projectId: 'instagram-2yt',
  storageBucket: 'instagram-2yt.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase (if no apps found (len===null) then create else use an existing app)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
