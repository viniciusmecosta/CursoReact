import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["matheus", "Pedro", "Josias"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Vinicius", age: 40 },
    { id: 2, name: "Tadeu", age: 21 },
    { id: 3, name: "Rafael", age: 23 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(`Número aleatório gerado: ${randomNumber}`);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar algum</button>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
