import { createContext } from "react"
import Component3 from "./component3"

export const data=createContext()

function Component1(){
   
    return(
        <>
        <h1>IM COMPONENT 1.</h1>
        <data.Provider value={{name:"surya"}}>
        <Component3/>
        </data.Provider>
        </>
    )
}
export default Component1