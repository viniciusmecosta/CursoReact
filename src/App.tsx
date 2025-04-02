import "./App.css";
import logo from "./assets/logo.png"
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
function App() {
  return (
    <>
      <div>
        <h1>Seção 3</h1>
        <div>
          <img src={logo}></img>
        </div>
        <ManageData/>
        <ListRender/>
        <CondicionalRender/>
      </div>
    </>
  );
}

export default App;
