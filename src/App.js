
import {addTodo,editTodo} from './redux/actions/action-types'
import {useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'




const App = () => {
  const todos= useSelector(state=> state.todos)
  const dispatch = useDispatch()
  const inputRef = useRef()

  return(
    <>
    {todos.map(e => (<h1>{e.description} <button onClick={()=>dispatch(editTodo())}>EDIT</button> </h1>         
                    ))}

    <input type='text' ref={inputRef} />
    
    <button onClick={()=>dispatch(addTodo(inputRef.current.value))}>Add</button>
       
    </>
  )
}

export default App;
