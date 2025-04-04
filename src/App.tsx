import { useState } from "react";
import "./App.css";
import ChangeMessageState from "./components/ChangeMessageState";
function App() {
  const [message, setMessage] = useState("");
  function showMessage() {
    console.log("Funcao acionada");
  }
  function handleMessage(msg: string) {
    setMessage(msg);
  }
  return (
    <>
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  );
}

export default App;
