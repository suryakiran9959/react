import { useCallback, useState } from "react";
import Todos from "./2";

const One = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
    console.log(addTodo);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      Count: {count}
      <button onClick={increment}>+</button>
    </>
  );
};
export default One;
// is a hook that will return a memorized function
// memo - it also wont work due to referential equality
