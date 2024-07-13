import { useDispatch } from "react-redux";
import { todoActionAdd } from "../redux/action/action";
import { useState } from "react";

export function Home1() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const inputFunction = (e) => {
    setTodoValue(e.target.value);
  };

  const addTodo = () => {
    if (todoValue.length >= 1) {
      alert("todo added..!");
      dispatch(todoActionAdd(todoValue));
      setTodoValue("");
    }
  };

  return (
    <>
      <input type="text" value={todoValue} onChange={inputFunction} />
      <button onClick={addTodo}>ADD TODO</button>
    </>
  );
}
