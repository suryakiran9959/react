import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"

const intialState={
    count:0
}

const reducer=(state,action)=>{
switch(action.type){
    case "increment":
        return{count:state.count+1}
    case "reset":
        return{count:0}
}
}
const Counter11=()=>{
const[state,dispatch]=useReducer(reducer,intialState)

const incrementValue=()=>{
    const action={
        type:"increment"
    }
    dispatch(action)
}
const resetValue=()=>{
    const action={
        type:"reset"
    }
    dispatch(action)
}

    return(
        <>
        <h1>useReducer Example..</h1>
        <h1>{state.count}</h1>
        <button onClick={incrementValue}>Increment </button>
        <button onClick={resetValue}>Reset</button>

        </>
    )
}
export default Counter11