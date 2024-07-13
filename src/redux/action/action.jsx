

export const todoActionAdd=(todoValue)=>{
    const todoAction={
        type:"ADD_TODO",
        payload:todoValue
    }
    return todoAction
}

export const increaseAction=()=>{
    const todoAction={
        type:"INCREASE_COUNT"
    }
    return todoAction
}