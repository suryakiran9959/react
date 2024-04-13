import { useState } from "react"

const UseStateExp3=()=>{
    const[timer,setTimer]=useState(20)

    const startTimer=()=>{
        setInterval(()=>{
            setTimer(preTime=>preTime-1)
        },1000)
    }
    return(
        <>
        <h1>useStateExp3</h1>
        <button onClick={startTimer}>Start Timer</button>
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