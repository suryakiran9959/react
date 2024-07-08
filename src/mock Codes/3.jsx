import { useState } from "react"

function UseStateExp(){
const[count,setCount]=useState(0)
const[text,setText]=useState("hello")

  const incrementCount=()=>{
   setCount(count+2)
   }
   const decrementCount=()=>{
    setCount(count-2)
   }
   function changeText(e){
    setText(e.target.value)
   }

    return(
        <>
        <input type="text" onChange={changeText} />
        <p>you typed {text}</p>
        <h1>count:{count}</h1>
        <button onClick={incrementCount}>increment</button>
        <button onClick={decrementCount}>Decrement</button>
        </>
    )
}
export default UseStateExp

/// useState -- adds state variable to component,updting state,