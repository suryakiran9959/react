import { useEffect, useState } from "react"
import NavBar from "./navbar"

const About=()=>{
    const[count,setCount]=useState(0)

useEffect(()=>{
    const timer=setInterval(()=>{
        setCount(preCount=>preCount+1)
    },500)
    return()=>{
        clearInterval(timer)
    }

},[count])
   
    return(
        <>
        <NavBar/>
        <h1>About</h1>
        <h1>{count}</h1>
        </>
    )
}
export default About