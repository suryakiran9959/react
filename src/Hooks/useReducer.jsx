
import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"

// const initialState={
//     count:0
// }

const reducer =(state,action)=>{
    // switch(action.type){
    //     case "increment":
    //         return{count:state.count+1}
    //     case "decrement":
    //         return{count:state.count-1}
    //     default:
    //         throw new Error("unexpexted action")
    // }
    if(action.type=="increment"){
        return{count:state.count+1}
    }else if(action.type=="decrement"){
        return{count:state.count-1} 
    }else{
        return state
    }
}


const Counter=()=>{
   const[state,dispatch] = useReducer(reducer, {count:0})

const incrementAge=()=>{
    const action={
        type:"increment"
    }
    dispatch(action)
}  
    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={incrementAge}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </>
    )
}
export default Counter