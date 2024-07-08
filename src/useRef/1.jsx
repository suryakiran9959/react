import React, { useRef } from 'react';

export default function Exp1() {
  const ref = useRef(0); // Ref for mutable value

  console.log('Component rendered'); // Log when the component renders

  function handleClick() {
    ref.current = ref.current + 1; // Update ref.current
    alert('Current value: ' + ref.current); // Display current value in alert
  }

  return (
    <>
      <p>Click the button to see the value!</p>
      <button onClick={handleClick}>Increment (without render)</button>
    </>
  );
}
/// here it was not re-rendering when count was updating ...
