import Todoname from "./components/Todoname";
import Inbox from "./components/Inbox";
import Item1 from "./components/Item1";
import './App.css'

function App() {

  return (
    <center className="todo container">
      <Todoname />
      <Inbox />

      <div className="items-container">
        <Item1 name1="buy milk" date1={"16/07/2024"} />     
        <Item1 name2="go to college" date2={"16/07/2024"}/>     
      </div>

    </center>
  );
}

export default App;
