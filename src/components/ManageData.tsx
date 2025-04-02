import { useState } from "react";

const ManageData = () => {
  const [someData, setSomeData] = useState(10);
  return (
    <div>
      <p>Valor = {someData}</p>
      <button onClick={() => setSomeData(someData + 20)}>Mudar variável</button>
    </div>
  );
};

export default ManageData;
