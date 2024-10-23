import { auth } from "./firebase";
export function Home({presentUser}){
    
    return(
        <>
        <center>
        <h1>Welcome to Home!!!</h1>
        <p>{presentUser.email}</p>
        <button onClick={()=> auth.signOut()} >sign Out</button>
        </center>
        </>
    )
}