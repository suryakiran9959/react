import { useState } from "react"

const UseStateExp3=()=>{
    const[timer,setTimer]=useState(20)
    const [reset,setReset]=useState(null)
    const [isRunning,setIsRunning]=useState(false)

    const startTimer=()=>{ 
    
     const time=setInterval(()=>{
        setTimer(preTime=>preTime-1)
        },1000)
       setReset(time)
       setIsRunning(true)
    
}
const stopTimer=()=>{
    clearInterval(reset)
    setIsRunning(false)
}
const resetTimer=()=>{
    clearInterval(reset)
    setTimer(20)
    setIsRunning(false)
}
    return(
        <>
        <h1>useStateExp3</h1>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={stopTimer}>Stop</button>
        <h1 style={{
            color:timer<=10 ? "red":"black"
        }}>{timer}</h1>
        {
            timer<=10 && <h3>Exam about to end.....</h3>
        }
        </>
    )
}
export default UseStateExp3
