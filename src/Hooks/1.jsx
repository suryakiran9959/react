import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"

const intialState={
    count:0,
    name:"raju",
}

const reducer=(state,action)=>{
switch(action.type){
    case "increment":
        return{count:state.count+1}
    case "reset":
        return{count:0}
    case "changeName":
        return{...state,name:"surya"}
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
const changeName=()=>{
    const action={
        type:"changeName"
    }
    dispatch(action)

}
    return(
        <>
        <h1>useReducer Example..</h1>
        <h1>{state.count}</h1>
        <h1>{state.name}</h1>
        <button onClick={incrementValue}>Increment </button>
        <button onClick={resetValue}>Reset</button>
        <button onClick={changeName}>ChangeName</button>

        </>
    )
}
export default Counter11