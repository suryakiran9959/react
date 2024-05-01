import { useContext, useEffect, useState } from "react"
import Header from "../bootstrapHeader/header"
import axios from "axios"
import "./home.css"
import GrowExample from "./spinner"
import { Link } from "react-router-dom"
import { Datashare } from "../navigationStack/main"


const Home=()=>{
    const[data,setData]=useState([])

   const response= useContext(Datashare)
   console.log(response);
    

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const response=await axios.get("https://dummyjson.com/recipes")
        setData(response.data.recipes)
        console.log(response.data.recipes);
    }

    return(
        <>
       <Header/>

        {data.length>0 

         ?
         <>
         <h1 className="welcome">WELCOME HOME {response.name}</h1>
        <div className="main">
        {
            
            data.map(eachObj=>{
                const{id,name,image,servings}=eachObj
                return(
                    <div key={id} className="child"> 
                        <h6>{name}</h6>
                        <img src={image} alt={name} height={180} width={180}/>
                        <p>servings:<img src="data:image/png;base64,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" height={42} width={42}/>{servings}</p>
                    <button>
                      <Link to={`${name}/${id}`}>
                        click to see details </Link>
                        </button>
                    </div>
                )

            })
            
        }
       
        </div>
        </>
        :
        <GrowExample/>
    }   
        </>
    )
}
export default Home