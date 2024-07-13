
const initialState={
    todos:["apple","mango"],
    count:0
}

const todoReducer=(state=initialState,action)=>{

    switch(action.type){
        case "ADD_TODO":
            return {...state,todos:[...state.todos,action.payload]}
        case "INCREASE_COUNT":
            return {...state,count:state.count+1} 
        default:
            return state
    }
}
export default todoReducer