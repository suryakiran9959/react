import { useState } from "react"
import Parent from "./2"

function Child(){

    const[count,setCount]=useState(0)

    const incrementCount=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h1>count:{count}</h1>
        <Parent increment={incrementCount}/>
        </>
    )
}
export default Child