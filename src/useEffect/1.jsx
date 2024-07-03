import { useState } from "react"
import { useEffect } from "react"

const UseEffectExp = ()=>{
    const[count,setCount]=useState(0)

useEffect(()=>{
    const timer =setInterval(()=>{
        console.log("mounting running ");
        setCount(count+1)
    },5000)

    return ()=>{
        clearInterval(timer)
    }
},[count])

    return(
        <>
        <h1>{count}</h1>
        </>
    )
}
export default UseEffectExp