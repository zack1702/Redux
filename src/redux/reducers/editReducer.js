import {EDITTODO} from '../constants/index'
const initialState={
    todo:[null]
}


function editReducer(state=initialState,action){
    if(action.type===EDITTODO)
    {return{
        todo:[...state.filter(e => e.id !== action.data.id)],
      
    }
}
    return state
}


export default editReducer;