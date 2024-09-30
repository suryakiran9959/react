import { useMemo } from "react";
import { useState } from "react";

function One(){
    const[num,setNum]=useState(0)
    const[data,setData]=useState(0)

    const memVal= useMemo(()=>{
        console.log("useMemo rendering..");
        return data*10
    },[data])

    return(
        <>
        <input type="text"  onChange={(e)=>setNum(e.target.value)} />
        <button onClick={()=> setData(num)}>set</button>
        <p>memorized value:{memVal}</p>
        </>
    )
}
export default One;