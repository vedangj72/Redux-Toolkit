// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Addtodo from "./componet/Addtodo";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Showtodo from "./componet/showtodo";

function App() {
  return (
    <Provider store={store} className="App">
      <Addtodo />
      <Showtodo />
    </Provider>
  );
}

export default App;
