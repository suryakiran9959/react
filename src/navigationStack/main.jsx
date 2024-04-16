import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "../navigationPages/about"
import Home from "../navigationPages/home"
import ErrorPage from "../navigationPages/ErrorPage"

const NavigationStack = ()=>{
    return(
       <BrowserRouter>
       <Routes>

            <Route path="/" Component={Home}/>
            <Route path="/About" Component={About}/>
            <Route  path="*" Component={ErrorPage}/>

       </Routes>
       </BrowserRouter>
    )
}
export default NavigationStack