import { useEffect, useState } from "react";

function Child({prop1}){
    const[data,setData]=useState("")
    

useEffect(()=>{
    console.log("child rendering..");
    setData(prop1())
},[prop1])

    return(
        <>
        <h4>{data}</h4>
        </>
    )
}
export default Child;