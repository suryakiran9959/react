import React, { useRef } from 'react';

export default function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    // Log form data to the console or handle form submission logic
    console.log('Form Data:', formData);

    // Perform any additional actions, like API calls, with the formData
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" ref={usernameRef} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" ref={passwordRef} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display username from form data only when form is submitted */}
      {usernameRef.current && (
        <p>username: {usernameRef.current.value}</p>
      )}
    </div>
  );
}

// Benefits:
//Efficiency: Using useRef allows you to access form input values directly without causing re-renders, which is more efficient for certain use cases.
//Controlled Submission: The handleSubmit function handles form submission logic, allowing you to process form data as needed without impacting the component's render cycle.
//This approach is ideal for scenarios where you need to manage form data efficiently and perform actions like API calls or other side effects without causing unnecessary re-renders in your React components.

// by using useState we can store and display 