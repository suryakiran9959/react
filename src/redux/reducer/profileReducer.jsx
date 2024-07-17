const initialState={
    profileName:"user 123",
    age:21,
    city:"chennai"
}

export const profileReducer=(state=initialState,action)=>{

    switch(action.type){
        case "UPDATE_USER_NAME":
            return {...state,profileName:action.payload}
        default:
            return state
    }

}