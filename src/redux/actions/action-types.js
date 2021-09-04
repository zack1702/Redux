import {ADDTODO,EDITTODO} from '../constants/index'

export function addTodo(data){
    return {
        type: ADDTODO,
        data
        
    }
}

export function editTodo(data){
    return {
        type: EDITTODO,
        data
        
    }
}