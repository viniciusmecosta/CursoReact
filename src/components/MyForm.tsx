import { FormEvent, useState } from "react";
import "./MyForm.css";
const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e: FormEvent<Element>): void => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log("Enviando forms");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <label>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <input type="submit" value={"Enviar"}></input>
      </form>
    </div>
  );
};

export default MyForm;
