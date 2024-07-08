import { useState, useEffect } from "react";

export default function Counter() {
  const [timer, setTimer] = useState(20);
  const [reset, setReset] = useState(null);

  // useEffect(() => {
  //   document.body.style.backgroundColor = timer % 2 === 0 ? "green" : "red";
  //   return () => {
  //     document.body.style.backgroundColor = ""; // Clean up the style on component unmount
  //   };
  // }, [timer]);

  const startTimer = () => {
    const time = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 2000);
    setReset(time);
  };

  const resetHandler = () => {
    clearInterval(reset);
    setTimer(20);
  };

  const stopTimer = () => {
    clearInterval(reset);
  };

  return (
    <>
      <h1 style={{ color: timer % 2 === 0 ? "blue" : "red" }}>{timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
// here the timer was setted if it was even the background color will change
// useEffect is added to change..
