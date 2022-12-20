import "./App.css";
import Todos from "./components/Todos";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
function App() {
  return (
    <>
      <div className="container p-3" style={{ width: "60%" }}>
        <div className="App">
          <h1>React Todo App</h1>
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
