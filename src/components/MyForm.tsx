import { useState } from "react";
import "./MyForm.css";
const MyForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          ></input>
        </div>
        <label>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
          ></input>
        </label>
        <input type="submit" value={"Enviar"}></input>
      </form>
    </div>
  );
};

export default MyForm;
