import React, { useState } from 'react';

function Component1() {
  return (
    <div>
      <h2>Component 1</h2>
      <p>This is Component 1.</p>
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h2>Component 2</h2>
      <p>This is Component 2.</p>
    </div>
  );
}

function MyComponent() {
  const navigate=useNav
  const [count, setCount] = useState(0);

  // Function to handle count change
  const incrementCount=()=>{
    setCount(count+1)
    
  }

  const decrementCount=()=>{
    setCount(count-1)
    
  }
 

  return (
    <div>
    <h1>{count}</h1>
    <h1>{count===10&& <Component1/>}</h1>
     <button onClick={incrementCount}>Increment</button>
     <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default MyComponent;
