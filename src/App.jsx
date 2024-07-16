import Todoname from "./components/Todoname";
import Inbox from "./components/Inbox";
import Item1 from "./components/Item1";
import Items2 from "./components/Items2";
import './App.css'

function App() {
  return (
    <center className="todo container">
      <Todoname />
      <Inbox />

      <div className="items-container">
        <Item1 />
        <Items2 />       
      </div>

    </center>
  );
}

export default App;
