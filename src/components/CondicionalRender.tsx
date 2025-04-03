import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("João");
  return (
    <div>
      <h1> Isso será exibido</h1>
      {x && <p> Se x for true, sim</p>}

      {name === "João" ? (
        <div>
          <p> nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
      <button onClick={() => setName("Vinicius")}>{name}</button>
    </div>
  );
};

export default CondicionalRender;
