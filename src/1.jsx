const { useState } = require("react")
export function Exp(){
    const[value,setValue]=useState("")

const handleEvent=(e)=>{
    setValue(e.target.value)
}


const darkMode=()=>{
    document.body.style={{backgroundColor:"brown"}}
}

if(value>=0){
var result=value%2 ==0 ? "even":"odd"
}else{
var result="not a number"
}
    return(
        <>
        <label htmlFor="">enter a no</label>
        <input type="text" value={value} onChange={handleEvent} />

        <label htmlFor="">result box</label>
        <input type="text" placeholder={value.length>0 &&result} /> <br />

        <button onClick={darkMode}>Mode</button>
        </>
    )
}