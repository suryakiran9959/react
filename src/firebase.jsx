import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLbBYbyyiRw7W1szhibnKQfKbZSuzOA9Y",
  authDomain: "auth1-67cb3.firebaseapp.com",
  projectId: "auth1-67cb3",
  storageBucket: "auth1-67cb3.appspot.com",
  messagingSenderId: "971704740330",
  appId: "1:971704740330:web:aa55be5c2b2c17b4b3ea93"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;

