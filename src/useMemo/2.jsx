import { useMemo, useState } from "react";

export default function Ten() {
  const [value, setValue] = useState(0);

  const result = useMemo(() => {
     return(document.body.style.backgroundColor =
      value % 2 == 0 ? "green" : "red");
  }, [value]);
  console.log(result);
  return (
    <>
      <h1>
        <b>count:{value}</b>
      </h1>
      <button onClick={() => setValue(value + 1)}>Increment</button> <br />
      <h1>{result}</h1>
    </>
  );
}
