import { useMemo } from "react";
import { useState } from "react";

export default function UseMemoExp1() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    return fact(number);
  }, [number]);

  return (
    <>
      <h1>factorial:{factorial}</h1>
      <button onClick={() => setCount(count + 1)}>Count Up</button> <br />
      <button onClick={() => setNumber(number + 1)}>Number UP</button>
      <h1>counter:{count}</h1>
    </>
  );
}

function fact(number) {
  let answer = 1;
  for (var i = number; i >= 1; i--) {
    answer = answer * i;
  }
  console.log("factorial function calling");
  return answer;
}

// useMemo -- prevents rerendering and memorizes the value(true/false in this exp)
// for calculations we use most 
// will run during the render of component 
// returns a memorized value.
