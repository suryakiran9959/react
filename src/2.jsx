import { useState } from "react"
import Child from "./3"

function Parent({increment}){

    return(
        <>
        <button onClick={increment}>increment</button>
        </>
    )
}
export default Parent