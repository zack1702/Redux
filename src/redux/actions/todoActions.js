import {ADDTODO, EDITTODO, TOGGLESTATUS} from '../constants/index'

export function addTodo(data){
    return{ 
        type: ADDTODO,
        data
    }
}

export function toggleStatus(id){
    return{
        type: TOGGLESTATUS,
        id
    }
}

export function editTodo(id,element){
    return{
        type: EDITTODO,
        id,
        element
    }
}
