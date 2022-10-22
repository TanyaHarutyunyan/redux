const  initialState = {
    count: 0
}


const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREASE_COUNT"){
        return {
            ...state,
            count: state.count + action.payload
        }
    }else if (action.type === "DECREASE_COUNT"){
        return {
            ...state,
            count: state.count - action.payload
        }
    }
    return state
}

export default counterReducer