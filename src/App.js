import "./App.css";
import { Home } from "./component/home";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store/store";
import { Home1 } from "./component/home1";

function App() {
  return (
    <>
      <Provider store={reduxStore}>
        <Home />
        <Home1/>
      </Provider>
    </>
  );
}

export default App;
