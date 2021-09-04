import {ADDTODO} from '../constants/index'

const initialState={
    todos:[{
        id:1,
        description:'',
        isDone:false,
    }]
}

function todoReducer(state=initialState,action){
    if(action.type===ADDTODO)
    {return{
        todos:[...state.todos,{id:Math.random(),
            description:action.data,
            isDone:false}]

    }
    }
    return state
}

export default todoReducer;