import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fetch from "./one"
import History from "./history"

function Stack(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/list" Component={Fetch}/>
                <Route path="/history" Component={History}/>

            </Routes>
        </BrowserRouter>
    )
}
export default Stack;
