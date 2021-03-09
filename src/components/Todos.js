import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from '../actions/todo.action'
import { addTodo } from '../actions/todo.add.action'
import { deleteTodo } from '../actions/todo.delete.action'
import { updateTodo } from '../actions/todo.update.action'
import Table from 'react-bootstrap/Table' 
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
    <Container>
    <div>
      <div className="flex-row">
      <div className="flex-large">
      <h1>Add item</h1>
      <Form>
      <input placeholder="insert new todos here" onChange={handleOnChange} value={newTodos}/>
      <Button variant="outline-success" onClick={() => dispatch((addTodo(newTodos, setNewTodos)))}>add</Button>
      </Form>
      </div>
      <div className="flex-large">
      <h2>View Item</h2>
      <Table>
        <thead>
          <tr>
            <th>Todos Name</th>
            <Col></Col>
            <th>Action</th>
          </tr>
        </thead>
      <tbody>
      { todo.data.length > 0 ?  (todo.data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <Col></Col>
            <td>
            <Button variant="warning" onClick={()=> dispatch((updateTodo(item)))}>edit</Button>
            <Button variant="danger" onClick={()=> dispatch((deleteTodo(item)))}>delete</Button>
            </td>
          </tr>
        ))) : <tr>
              <td>No Todo</td>
              </tr>}
      </tbody>
    </Table>
    </div>
    </div>
    </div>
    </Container>
  );
}

export default Todos;