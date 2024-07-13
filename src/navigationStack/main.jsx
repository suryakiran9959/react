import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "../navigationPages/about"
import Home from "../navigationPages/home"
import ErrorPage from "../navigationPages/ErrorPage"
import DetailProduct from "../navigationPages/detailProduct"
import { createContext, useState } from "react"
import CartsScreen from "../navigationPages/cartsScreen"
import Login from "../loginPage/1"

export const Datashare=createContext()

const NavigationStack = ()=>{
    const[cartItems,setCartItems]=useState([])

    const addCartItems=(eachItem)=>{
        setCartItems([...cartItems,eachItem])
    }
    const removeCartItems=(id)=>{
        
    }

    return(
        <Datashare.Provider value={{cartItems,addCartItems,removeCartItems}}>
              <BrowserRouter>
       <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/About" Component={About}/>
            <Route  path="*" Component={ErrorPage}/>
            <Route  path="/cartScreen" Component={CartsScreen}/>
            <Route path=":brand/:id" Component={DetailProduct}/>

       </Routes>
              </BrowserRouter>
       </Datashare.Provider> 
    )
}
export default NavigationStack