import { useState } from "react"

const UseStateExp2=()=>{
    const[fruits,setFruits]=useState(["Apple","Banana"])

const addFruit=()=>{
    const newFruits=[...fruits,"new fruit"]
    setFruits(newFruits)
}

    return(
        <>
        <h2>useStateExp2</h2>
        <button onClick={addFruit}>Add Fruit</button>
        {
            fruits.map((value,index)=><h3 key={index}>{value}</h3>)
        }
        </>
    )
}
export default UseStateExp2