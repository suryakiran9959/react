
import { useEffect, useState } from "react";
import "./App.css";
import Exp1 from "./login";
import { auth } from "./firebase";
import { Home } from "./home";

function App() {
  const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user => { // it is function we can check at present who is logged in
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      }); 
    }
    else{
      setPresentUser(null)
    }
    } )
  },[])
  return(
  <>
  {presentUser ? <Home presentUser={presentUser}/> : <Exp1/>}
  
  </>
  )
}

export default App;
