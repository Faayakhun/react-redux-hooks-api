import {
    GET_TODO_FAILED,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
  } from '../actions/todo.action'

  import {
    ADD_TODO_FAILED,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
  } from '../actions/todo.add.action'

  import {
    DELETE_TODO_FAILED,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
  } from '../actions/todo.delete.action'

  import {
    UPDATE_TODO_FAILED,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
  } from '../actions/todo.update.action'
  
  const initialState = {
    data: [],
    error: null,
    isLoading: false,
  };
  
  const todo = (state = initialState, action) => {
    switch (action.type) {
      case GET_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_TODO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_TODO_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      case ADD_TODO_REQUEST:
        return {
          ...state
        };
      case ADD_TODO_SUCCESS:
        return {
          ...state,
          data: [...state.data,action.result]
        }
      case ADD_TODO_FAILED:
        return {
          ...state,
          error: action.error,
        }
      case DELETE_TODO_REQUEST:
        return {
          ...state
        }
      case DELETE_TODO_SUCCESS:
        return {
          ...state,
          data: action.result,
        }
      case DELETE_TODO_FAILED:
        return {
          ...state,
          error: action.error
        }
      case UPDATE_TODO_REQUEST:
        return {
          ...state
        }
      case UPDATE_TODO_SUCCESS:
        return {
          ...state,
          data: action.result
        }
      case UPDATE_TODO_FAILED:
        return {
          ...state,
          error: action.error
        }
      default:
        return state;
    }
  };
  
  export default todo;