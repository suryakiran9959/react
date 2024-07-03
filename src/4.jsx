import { useState } from "react"

function Counter(){
    const[count,setCount]=useState(0)
    
    const incrementCount=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h1 style={{color:count%2==0 ? "green":"red"}}>count:{count}</h1>
        <button onClick={incrementCount}>incre</button>
        </>
    )
}
export default Counter