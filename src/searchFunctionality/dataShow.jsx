import { useState } from "react"
import { Search } from "./search"

export function DataShow(){
    const[data,setData]=useState([])
    return(
        <>
        <Search sendFunction={setData}/>
        {
            data.map((item)=>(
                <li>{item.name}</li>
            ))
        }
        
        </>
    )
}