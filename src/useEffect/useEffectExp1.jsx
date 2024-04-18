import {useEffect,useState} from "react";
import axios from "axios"

const UseEffect =()=>{
    const [productListing,setProductListing]=useState([])
    const [singleObj,setSingleObj]=useState({})
    const [count,setCount]=useState(1)

    useEffect(()=>{
        products()  
    },[])

    useEffect(()=>{
        eachProduct()
    },[count])

    const products=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        setProductListing(response.data.products)
        console.log(response);
    }

    const eachProduct = async()=>{
        const eachObj=await axios.get(`https://dummyjson.com/products/${count}`)
        setSingleObj(eachObj.data);
        console.log(eachObj);
        
    }


    const clickHandler=(e)=>{
        setCount(e.target.value)
    }
    
    return(
    <>
    <h1>Use Effect Example1</h1>
    {
        productListing.map((eachItem)=>{
            const {id}=eachItem
            return(
                <button key={id} value={id} onClick={clickHandler}>{eachItem.id}</button>
            )
        })
    }
    <div className="img">
    <img src={singleObj.thumbnail} alt="" />
    </div>
   
    </>
    )
}
export default UseEffect;