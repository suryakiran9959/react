import { useState } from "react"

function Exp1(){
const[data,setData]=useState({email:"",password:""})

const eventHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

console.log(data.email);
    return(
        <div style={{border:"1px solid black"}}>
            <center>
            <h1>Authentication</h1>
            <label>Email:</label>
            <input type="email" name="email" value={data.email} placeholder="Enter the email.." onChange={eventHandler}/> <br /> <br />

            <label>Password:</label>
            <input type="password" name="password" value={data.password} placeholder="Enter the password.." onChange={eventHandler}/> <br /> <br />

            <button>Log-in</button> &nbsp;
            <button>Sign-up</button>
            </center>
        </div>
    )
}
export default Exp1