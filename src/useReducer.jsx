const { useReducer } = require("react")

const reducerFunction=(state,action)=>{

    switch(action.type){
        case "INCREMENT_AGE":
            return{...state,age:state.age+10}

        case "DECREMENT_AGE":
            return{...state,age:state.age-10}

        case "RESET_AGE":
            return{...state,age:100}

        case "INCREMENT_COUNT":
            return{...state,count:state.count+1}

        case "DECREMENT_COUNT":
            return{...state,count:state.count-1}

        case "CHANE_NAME":
            return{...state,name:"xyz"}

        default :
        return state
 

    }

}
const initialState={
    name:"abc",
    count:10,
    age:100,
    sal:1000,
    subject:[1,2,3,4]

}

const UseReducerExp=()=>{
   const [currentValue,dispatchFunction] =useReducer(reducerFunction,initialState)

const incrementAge=()=>{
    const action={
        type:"INCREMENT_AGE"
    }
    dispatchFunction(action)
}
const decrementAge=()=>{
    const action={
        type:"DECREMENT_AGE"
    }
    dispatchFunction(action)
}
const changeName=()=>{
    const action={
        type:"CHANE_NAME"
    }
    dispatchFunction(action)
}

    return(
        <>
        <h1>useReducer example..</h1>
        <h1>{currentValue.age}</h1>
        <h1>{currentValue.name}</h1>
        <button onClick={incrementAge}>increment age</button>
        <button onClick={decrementAge}>decrement age</button>
        <button>increment count</button>
        <button>decrement count</button>
        <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default UseReducerExp
