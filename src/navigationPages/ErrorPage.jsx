import { useNavigate } from "react-router-dom"
import Header from "../bootstrapHeader/header"
import "./errorPage.css"

function ErrorPage(){
    const usenavigate =useNavigate()
    const errorNavigate=()=>{
        usenavigate("/")
    }
    return(
        <>
        <Header/>
        <h1 style={{textAlign:"center"}}>Error</h1>
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWczS_wHuKq1gipaw7mAxokMPIXLb1Y4c4uw&s" height={300} alt="" />
        <button  className="img"  onClick={errorNavigate} >Back to Home..</button>
        </>
    )
}
export default ErrorPage