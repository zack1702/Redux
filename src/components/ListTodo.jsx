import { useSelector } from "react-redux";
import Todo from "./Todo";

const ListTodo = () => {

  const todos = useSelector((state) => state.todoReducer.todos);

  console.log(todos);
  return (
    <div>
      <select name="" id="">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>

      </select>
      {todos.map((e) => (
        <div key={e.id}>
          <Todo data={e} />
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
