import { useCallback, useState } from "react";
import Child from "./child";

function Parent(){
    const[count,setCount]=useState(0)
    const[data,setData]=useState("")

    const memFunc = useCallback( function One(){
        return data;
    },[data])

    return(
        <>
    <input type="text" value={data} onChange={(e)=> setData(e.target.value)} /> <br />
    <button onClick={()=>setCount(count+1)}>increment</button> 
    <h1>COUNT:{count}</h1>
    <Child  prop1={memFunc}/>
        </>
    )
}
export default Parent;