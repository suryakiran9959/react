import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"
import CustomButton from "./customButton"



const ParentComponent=()=>{
    const[age,setAge]=useState(10)
    const[salary,setSalary]=useState(1000)

    const increaseAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    // const increaseAge=()=>{
    //     setAge(age+1)
    // }

    const increaseSalary=useCallback(()=>{
        setSalary(salary+1)
    },[salary])

    // const increaseSalary=()=>{
    //     setSalary(salary+1)
    // }

    return(
        <>
        <h3>Parent component useCallback Exp</h3>
        <h3>age:{age}</h3>
        <h3>salary:{salary}</h3>
        <CustomButton title="Age Increment" handleClick={increaseAge}/>
        <CustomButton title="salary Increment" handleClick={increaseSalary}/>
        </>
    )

}
export default ParentComponent