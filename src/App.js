import { Provider } from "react-redux";
import "./App.css";

import { reduxStore } from "./redux/store";
import { Exp1 } from "./react/1";

function App() {
  return (
    <>
      <Provider store={reduxStore}>
        <Exp1 />
      </Provider>
    </>
  );
}

export default App;
