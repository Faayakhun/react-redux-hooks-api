import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from '../actions/todo.action'
import { addTodo } from '../actions/todo.add.action'
import { deleteTodo } from '../actions/todo.delete.action'
import { updateTodo } from '../actions/todo.update.action'

import { Spinner } from "react-bootstrap";

function Todos() {
  const todo = useSelector((state) => state.Todo);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const [newTodos, setNewTodos] = useState()
  function handleOnChange (val) {
    setNewTodos(val.target.value)
  }
  return (
    <div>
      <input onChange={handleOnChange}/>
      <button onClick={() => dispatch((addTodo(newTodos)))}>add</button>
      {todo.isLoading === true ? (
        <Spinner animation="border" />
      ) : (
        todo.data.map((item, index) => (
          <div key={index}>
            <h1>Name :{item.name}</h1>
            <button onClick={()=> dispatch((updateTodo(item)))}>edit</button>
            <button onClick={()=> dispatch((deleteTodo(item)))}>delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Todos;