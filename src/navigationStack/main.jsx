import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "../navigationPages/about"
import Home from "../navigationPages/home"
import ErrorPage from "../navigationPages/ErrorPage"
import DetailProduct from "../navigationPages/detailProduct"
import { createContext } from "react"

export const Datashare=createContext()

const NavigationStack = ()=>{
    return(
        <Datashare.Provider value={{name:"surya"}}>
              <BrowserRouter>
       <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/About" Component={About}/>
            <Route  path="*" Component={ErrorPage}/>
            <Route path=":brand/:id" Component={DetailProduct}/>

       </Routes>
              </BrowserRouter>
       </Datashare.Provider> 
    )
}
export default NavigationStack