import "./App.css";
import Todos from "./components/Todos";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
function App() {
  return (
    <>
      <div className="container" style={{ width: "60%" }}>
        <div className="App">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
