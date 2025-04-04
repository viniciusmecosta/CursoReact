import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
function App() {
  const n: number = 20;
  const redTitle: boolean = true;
  const [name, setName] = useState("Jorge");
  return (
    <>
      <p style={{ color: "blue", fontSize: 100 }}>
        Este elemento foi estilizado inline
      </p>
      <h2
        style={name === "Vinicius" ? { color: "white" } : { color: "purple" }}
      >
        {" "}
        h2 style dinamico
      </h2>

      <h2 className={redTitle ? "red-title" : "title"}>
        Esse titulo vai ter classe dinamica
      </h2>
      <Title />
    </>
  );
}

export default App;
