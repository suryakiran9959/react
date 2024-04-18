import { useNavigate } from "react-router-dom"
import Header from "../bootstrapHeader/header"

function ErrorPage(){
    const usenavigate =useNavigate()
    const errorNavigate=()=>{
        usenavigate("/")
    }
    return(
        <>
        <h1 style={{textAlign:"center"}}>Error</h1>
        <button onClick={errorNavigate} >Back to Home..</button>
        </>
    )
}
export default ErrorPage