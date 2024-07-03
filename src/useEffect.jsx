import { useEffect, useState } from "react"
import axios from "axios"
function UseEffectExp(){

    const[data,setData]=useState([])

    useEffect(()=>{
        products()
    },[])

    const products=async()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setData(response.data.products)
        console.log(response.data.products);
    }

    return(
        <>
        {
            data.map((eachitem)=>{
                return(
                    <h1>{eachitem.brand}</h1>
                )

            })
        }
        
        </>
    )

}
export default UseEffectExp