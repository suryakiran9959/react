import { useContext } from "react"
import { Link } from "react-router-dom"
import { Datashare } from "../navigationStack/main"

function Header(){

  const{cartItems}=useContext(Datashare)

    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav" >
            <li className="nav-item" style={{margin:"20px"}}>
             <Link to={"/"}  style={{textDecoration:"none"}}>
             HOME
             </Link>
            </li>

            <li className="nav-item" style={{margin:"20px"}}>
             <Link to={"/About"} style={{textDecoration:"none"}}>
             ABOUT
             </Link>
            </li>

            <li className="nav-item" style={{margin:"20px"}}>
             <Link to={"/CartScreen"} style={{textDecoration:"none"}}>
             Cart {cartItems.length}
             </Link>
            </li>
            
          </ul>
        </div>
      </nav>
      
    )
}
export default Header