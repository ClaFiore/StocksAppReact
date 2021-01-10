let initialState = {view: 'home'}

let viewReducer = (state = initialState, action) => {
    switch(action.type){
        case 'view':
        return {...state,
                view: action.payload}
        default:
            return state
    }
}

export default viewReducer