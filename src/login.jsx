import { useState } from "react";
import { auth } from "./firebase"; // Import auth from firebase.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Import the function

function Exp1() {
  const [data, setData] = useState({ email: "", password: "" });
  const { email, password } = data;

  const eventHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        console.log(userCredential.user);
      })
      .catch((err) => console.log(err));
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed up
        console.log(userCredential.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <center>
        <h1>Authentication</h1>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter the email.."
          onChange={eventHandler}
        />
        <br /> <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter the password.."
          onChange={eventHandler}
        />
        <br /> <br />

        <button onClick={logIn}>Login</button> &nbsp;
        <button onClick={signUp}>Signup</button>
      </center>
    </div>
  );
}

export default Exp1;


