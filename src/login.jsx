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
      .catch((err) => {
        console.log("Error from login:", err); // Log the entire error object

        if (err.code === "auth/user-not-found") {
          alert("You are not signed up. Please sign up first!");
        } else if (err.code === "auth/invalid-credential") {
          alert("You entered invalid credentials! Please re-enter correctly.");
        } else {
          console.log("Unhandled error:", err.message); // Log error message
        }
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((err) => {
        console.log("Error from signup:", err); // Log the entire error object
        if (err.code === "auth/email-already-in-use") {
          alert("Email already in use. Please log in.");
        } else {
          console.log("Unhandled error:", err.message); // Log error message
        }
      });
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

