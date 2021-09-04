import {createStore,combineReducers} from 'redux'
import todoReducer from '../reducers/todoReducer'
import editReducer from '../reducers/editReducer';
const rootReducer = combineReducers({
    todos:todoReducer,
    todo:editReducer
})

export const store = createStore(rootReducer);