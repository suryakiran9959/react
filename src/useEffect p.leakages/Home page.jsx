import { useEffect, useState } from "react"
import NavBar from "./navbar"

const Home=()=>{
const[count,setCount]=useState(0)

useEffect(()=>{

     document.title=`clicked${count} times!!`

    return()=>{
        document.title="react ComeBack"
    }
},[count])
const incrementCount=()=>{
    setCount(count+1)
}

    return(
        <>
        <NavBar/>
        <h1>HOME</h1>
        <button onClick={incrementCount}>increment</button>
        </>
    )
}
export default Home