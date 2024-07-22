import axios from "axios"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"

export function Search({sendFunction}){
    const[value,setValue]=useState("")

const fetchData=async(typedValue)=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    const response1=response.data.filter((user)=>(
        user && user.name && user.name.toLowerCase().includes(typedValue.toLowerCase())
        
    ))
    sendFunction(response1)
    console.log(response1)

}
const handleChange=(e)=>{
    setValue(e.target.value)
    fetchData(e.target.value)
}

    return(
        <>
        <center>
        <FaSearch/>
        <input type="text" value={value} placeholder="Enter a keyword to search." onChange={handleChange} />
        </center>
        </>
    )
}