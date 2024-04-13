const { useState } = require("react")

const UseStateExp1 =()=>{
    const [count,setCount]=useState(0)
// this function is to handle the increment,decrement and reset functionality
const incrementHandler=(value,type)=>{
    if(type=="increment"){
        setCount(count+value)
    }
    else if(type=="decrement"){
        setCount(count-value)
    }
    else{
        setCount(0)
    }
    
}
    return(
        <>
        <h1>useState Exp1</h1>
        <h3>{count}</h3>
        <button onClick={()=>incrementHandler(10,"increment")}>Increment</button>
        <button onClick={()=>incrementHandler(10,"decrement")}>Decrement</button>
        <button onClick={()=>incrementHandler()}>Reset</button>
        </>
    )
}
export default UseStateExp1;