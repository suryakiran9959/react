import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxAction, reduxActionDelete } from "../redux/action";

export function Exp1() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  console.log(data);

  const addTodo = (e) => {
    setItem(e.target.value);
  };

  const setTodo = () => {
    dispatch(reduxAction(item));
  };
  return (
    <>
      <label>Todo</label>
      <input
        type="text"
        value={item}
        onChange={addTodo}
        placeholder="enter todo..."
      />
      <button onClick={setTodo}>add</button>
      {data.todos.map((todo, index) => {
        return (
          <>
            <li>{todo}</li>
            <button onClick={() => dispatch(reduxActionDelete(index))}>
              delete
            </button>
            <hr />
          </>
        );
      })}
    </>
  );
}
