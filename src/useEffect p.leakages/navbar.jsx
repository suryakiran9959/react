import { Link } from "react-router-dom"

const NavBar=()=>{
    return(
        <>
        <span>
           <Link to="/">HOME</Link>
        </span>

        <span>
           <Link to="/About">ABOUT</Link>
        </span>

        </>
    )
}
export default NavBar