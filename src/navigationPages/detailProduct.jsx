import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GrowExample from "./spinner"


const DetailProduct=()=>{
const[product,setProduct]=useState({})
const {id}=useParams()

useEffect(()=>{
fetchData()
},[id])

const fetchData=async()=>{
    try{
    const response=await axios.get(`https://dummyjson.com/recipes/${id}`)
    setProduct(response.data)
    console.log(response.data);
    }
    catch(err){
        console.log(err);
    }
}

    return(
        <>
    
    {product.id==id
    ?
<>
        <h1>product detail</h1>
        <h5>{product.name}</h5>
        <img src={product.image} alt={product.name} height={150}/>
        <h5>Preparation-time:{product.prepTimeMinutes}mins</h5>
        </>
        :
        <GrowExample/>
    }
        
        </>


    )
}
export default DetailProduct