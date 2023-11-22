
import { useState } from "react";
import { useReducer } from "react";
import "./todo.css";

function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, { text: action.payload, completed: false }];
    case "DELETE_DATA":
      return state.filter((todo) => todo.text !== action.payload);
    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.text === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

const initialvalue = [];

const Todo = () => {
  const [inputdata, setInput] = useState("");
  const [state, dispatch] = useReducer(reducerFunction, initialvalue);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (inputdata !== "") {
      dispatch({
        type: "ADD_DATA",
        payload: inputdata,
      });
      setInput("");
    }
  };

  const handleDelete = (todo) => {
    dispatch({
      type: "DELETE_DATA",
      payload: todo.text,
    });
  };

  const handleComplete = (todo) => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: todo.text,
    });
  };

  return (
    <>
      <center>
        <h1 className="text">Todolist</h1>
        <input
          type="text"
          value={inputdata}
          onChange={handleInput}
          className="input"
          placeholder="write here "
        />
        <button onClick={handleAdd} className="button">
          Add
        </button>
        <ul>
          {state.map((todo) => (
            <li key={todo.text} className={todo.completed ? 'completed' : ''}>
              {todo.text}
              <button onClick={() => handleDelete(todo)}className="delete">Delete</button>
              <button onClick={() => handleComplete(todo)} className="undo">
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </li>
          ))}
        </ul>
      </center>
    </>
  );
};

export default Todo;



























































