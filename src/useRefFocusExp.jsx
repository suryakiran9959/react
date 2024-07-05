import { useRef } from "react";

function UseRefExp(){
    const inputRef=useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }
    return(
        <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus</button>
        </>
    )
}
export default UseRefExp  

// useRefFocusExp.. 
