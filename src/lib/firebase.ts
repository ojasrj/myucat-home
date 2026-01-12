import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9jqPw1K0hIjq0oIgcceQwk_2XegajK0k",
  authDomain: "alevellessons-7175e.firebaseapp.com",
  projectId: "alevellessons-7175e",
  storageBucket: "alevellessons-7175e.firebasestorage.app",
  messagingSenderId: "1068016646580",
  appId: "1:1068016646580:web:d1b9080970a2b6f44b5ae1",
  measurementId: "G-V94V8FEYC3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
