import { useState } from "react"

export default function Exp(){ 
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")

    const handleClickName=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    const handleClickPassword=(e)=>{
        setPassword(e.target.value)
    }
    
    return(
        <>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleClickName}/>
        <p>You are Typing Name:{name}</p>

        <label>Password:</label>
        <input type="password" value={password} onChange={handleClickPassword} />
        <p>You are typing Password:{password}</p>

        </>
    )
}

// onChange event handler-- used to do something when the user chages/writes in iput filed 
// it runs on every change 
// the updated value shows as you are typing.. 
// it is controlled component