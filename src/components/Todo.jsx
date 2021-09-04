import React from "react";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { toggleStatus, editTodo } from "../redux/actions/index";
import {useState} from 'react'

const Todo = ({ data }) => {
 
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch();

  const changeEdit = ( ) => { 
      setToggle(prevState => !prevState )
  }

  return (
    <div className="todo">
        
      <input type="checkbox" onClick={() => dispatch(toggleStatus(data.id))} />
      {data.id} - {data.task} - {data.status ? "DONE" : "NOT DONE YET"}
      <form className={toggle ? '':'hide'} onSubmit={(e) => {
          e.preventDefault();
          dispatch(editTodo(data.id, e.target.editing.value));
          changeEdit()
      }}>
        <input type="text" name='editing'/>
        <button>Edit</button>
      </form>

      <button className={toggle ? 'hide':''} onClick={changeEdit}>Edit</button>
    </div>
  );
};

export default Todo;
