
import { useEffect, useState } from "react";
import "./App.css";
import Exp1 from "./login";
import { auth } from "./firebase";
import { Home } from "./home";

function Main() {
  const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user => { 
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
export default Main;
