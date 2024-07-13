import { useSelector } from "react-redux";

export function Home() {
  const reduxData = useSelector((state) => state.todos);
  console.log(reduxData);
  return (
    <>
      <center>
        <h1>HOME!</h1>
      </center>
      {reduxData.map((todo, index) => {
        return (
          <h2
            key={index}
            style={{color: todo.length > 5 ? "green" : "red" }}
          >
            {todo}
          </h2>
        );
      })}
    </>
  );
}
