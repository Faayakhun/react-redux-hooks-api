import axios from 'axios'

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILED = "ADD_TODO_FAILED";

export const addTodoRequest = () => {
    return {
      type: ADD_TODO_REQUEST,
    };
  };
  
  export const addTodoSuccess = (result) => {
    return {
      type: ADD_TODO_SUCCESS,
      result,
    };
  };
  
  export const addTodoError = (error) => {
    return {
      type: ADD_TODO_FAILED,
      error,
    };
  };
  
  export const addTodo = (newTodos,setNewTodos) => {
    return function (dispatch) {
      dispatch(addTodoRequest());
  
      axios
        .post("https://603cd864f4333a0017b68722.mockapi.io/todos", {name: newTodos})
        .then((result) => dispatch(addTodoSuccess(result.data)))
        .catch((error) => dispatch(addTodoError(error)));
        setNewTodos("")
    };
  };