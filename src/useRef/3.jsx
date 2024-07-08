import { useRef } from "react"

export default function Exp(){
    const data=useRef()
    console.log("rendering......");

    const handleEvent=()=>{
        // console.log(data.current.value);
        data.current.focus()
    }

    return(
        <>
        <label>Name:</label>
        <input type="text" ref={data} />
        <button onClick={handleEvent}>submit</button>
        </>
    )
}
// useRef it will not render 