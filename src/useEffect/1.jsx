import { useState } from "react";
import { useEffect } from "react"

export default function One(){
    const[value,setValue]=useState("posts")

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${value}`)
      .then(response => response.json())
      .then(json => console.log(json))
    },[value])

    return(
        <>
        <button onClick={()=>setValue("posts")}>Post</button>
        <button onClick={()=>setValue("users")}>Users</button>
        <button onClick={()=>setValue("comments")}>Comment</button>
        <h1>{value}</h1>
        
        </>
    )
}