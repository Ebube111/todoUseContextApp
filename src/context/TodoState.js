import React, { useReducer } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";

import { ADD_TODO, TOOGLE_TODO, DELETE_TODO } from "./todos-actions";

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //add TODO
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  //toogle TODO
  const toggleTodo = (todoID) => {
    dispatch({
      type: TOOGLE_TODO,
      payload: todoID,
    });
  };

  //Delete TODO
  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
