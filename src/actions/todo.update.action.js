import axios from 'axios'

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILED = "UPDATE_TODO_FAILED";

export const updateTodoRequest = () => {
    return {
      type: UPDATE_TODO_REQUEST,
    };
  };
  
  export const updateTodoSuccess = (result) => {
    return {
      type: UPDATE_TODO_SUCCESS,
      result,
    };
  };
  
  export const updateTodoError = (error) => {
    return {
      type: UPDATE_TODO_FAILED,
      error,
    };
  };
  
  export const updateTodo = (item) => {
    return function (dispatch) {
        const dataUpdate = prompt("insert new todos here")
        dispatch(updateTodoRequest());
        if (dataUpdate === null) {
          return;
        }
        axios
        .put(`https://603cd864f4333a0017b68722.mockapi.io/todos/${item.id}`, {name: dataUpdate})
        .then(result =>{
            console.log(result)
            axios.get("https://603cd864f4333a0017b68722.mockapi.io/todos")
            .then((result) => dispatch(updateTodoSuccess(result.data)))
        })
        .catch((error) => dispatch(updateTodoError(error)));
    };
  };