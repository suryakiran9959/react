import { AccordionButton } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home page"
import About from "./about page"

const NavigationStack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>


        <Route path="/" Component={Home}/>
        <Route path="/About" Component={About}/>


        </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default NavigationStack