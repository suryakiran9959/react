import {useEffect,useState} from "react";
import axios from "axios"

const UseEffect =()=>{
    const [productListing,setProductListing]=useState([])
    const [count,setCount]=useState(0)
    const [age,setAge]=useState(20)

    useEffect(()=>{
        console.log("useEffect renders");
        products()  
    },[])

    const products=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        console.log(response);
        setProductListing(response.data.products)
    }

    const incrementCount=()=>{
        setCount(count+1)
    }
    const incrementAge=()=>{
        setAge(age+999)
    }

    return(
    <>
    <h1>Use Effect Example-1</h1>
    <h1>Count:{count}</h1>
    <button onClick={incrementCount}>Increment</button>
    <h1>Age:{age}</h1>
    <button onClick={incrementAge}>Increment</button>
    </>
    )
}
export default UseEffect;