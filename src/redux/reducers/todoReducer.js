import {ADDTODO, TOGGLESTATUS, EDITTODO} from '../constants/index'

const initialState = {
    todos: [{
        id:1,
        task:'Curing COVID',
        status: false
    }]
}

export function todoReducer(state = initialState, action){
    if(action.type === ADDTODO){
        return { 
            todos: [...state.todos, {
                id:Math.round(Math.random()*1000),
                task: action.data,
                status: false
            }]
        }
    }

    if(action.type === TOGGLESTATUS) {
      
        return {
            todos: state.todos.map(e => {
                if(e.id === action.id){
                    return {...e, status: !e.status}
                }
                return e
            })
        }
    }

    if (action.type === EDITTODO){
      
        return{
            todos: state.todos.map(e => {
                if(e.id === action.id) {
                    return {...e, task: action.element }
                }

                return e
            })
        }
    }
    return state
}