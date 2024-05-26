import { useMemo } from "react"
import { useState } from "react"


const UseMemoExp=()=>{
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(1000)

    const ageEvenCalculations= useMemo(()=>{
        console.log("ageEvenCalculations rendering..");
        const even=age%2===0
        return even ? "EVEN" : "ODD"
    },[age])

    // const ageEvenCalculations=()=>{
    //     console.log("ageEvenCalculations rendering..");
    //     const even=age%2===0
    //     return even ? "EVEN" : "ODD"
    // }

    const increaseAge=()=>{
        setAge(age+1)
    }
    const increaseSalary=()=>{
        setSalary(salary+1)
    }

    return(
        <>
        <h1>useMemo example..</h1>
        <h3>Age calculation:{ageEvenCalculations}</h3>
        <h4>{age}</h4>
        <h4>{salary}</h4>
        <button onClick={increaseAge}>Age increase</button>
        <button onClick={increaseSalary}>Salary increase</button>

        </>
    )
}
export default UseMemoExp