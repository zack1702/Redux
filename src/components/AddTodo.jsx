import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/actions/index'
import './AddTodo.css'


const AddTodo = () => {
    const dispatch = useDispatch()
    return (
        <form className='addtodo' onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodo(e.target.adding.value))
        }}>

            <input type='text' name='adding'/>
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo
