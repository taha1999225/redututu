import "./App.css";
import Addtodo from "./components/Addtodo";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <Header />
      <Addtodo />
      <Todolist />
    </div>
  );
}

export default App;
