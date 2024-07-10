import { useContext} from "react"
import { data } from "./component1"


function Component3(){
    
    const value=useContext(data)

    return(
        <>
        <h1>IAM COMPONENT 3.</h1> 
        <h4>{value.name}</h4>
        </>
    )
}
export default Component3