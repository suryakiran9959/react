import { useState } from "react"

const ControlledComponent =()=>{
const [username,setUsername]=useState("")
const[password,setPassword]=useState("")
const[userNameError,setUserNameError]=useState(null)

const userNameHandler=(event)=>{
const userName=event.target.value 
setUsername(userName)

if(userName.trim().length>6){
    // alert("input must be less than 6 char")
    setUserNameError("user name should be less than 6 char")
}
else{
    setUserNameError(null)
}

console.log(userName);
}

const passwordHandler=(event)=>{
    const password=event.target.value
    setPassword(password)
    
}
const handleSubmit=(event)=>{
    event.preventDefault()
     
    const userDetails={
        username:username,
        password:password,
        id:Math.random()
    }
    console.log(userDetails);
}
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">UserName</label>
        <input type="text" 
        value={username}
        onChange={userNameHandler}
        />
        {userNameError && <h3 style={{color:"red"}}>Inavalid userName</h3>}

        <label htmlFor="">Password</label>
        <input type="text"
        value={password}
        onChange={passwordHandler}
        />

        <button type="submit">Submit</button>

        </form>
        </>
    )
}
export default ControlledComponent