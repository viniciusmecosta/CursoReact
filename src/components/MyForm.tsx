import { FormEvent, useState } from "react";
import "./MyForm.css";
import {User} from "./User.ts";
interface Props {
  user: User;
}

const MyForm = (user:Props) => {
  const [name, setName] = useState(user.user? user.user.name: "");
  const [email, setEmail] = useState(user.user? user.user.email: "");
  const [role, setRole] = useState(user.user? user.user.role: "");

  const handleForm = (e: FormEvent<Element>): void => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log("Enviando forms");
    console.log(bio);
    console.log(role);
    setName("");
    setEmail("");
    setBio("");
  };

  const [bio, setBio] = useState(user.user? user.user.bio : "");


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
            value={name}
          ></input>
        </div>
        <label>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
        <span>Bio:</span>
        <textarea name={"bio"} placeholder={"Descrição do Usuário"} onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>

        <label>
          <span>Funcão no sistema:</span>
          <select onChange={(e) => setRole(e.target.value)}>
            <option value={"user"}>Usuário</option>
            <option value={"editor"}>Editor</option>
            <option value={"admin"}>Administrador</option>
          </select>
        </label>
        <input type="submit" value={"Enviar"}></input>
      </form>
    </div>
  );
};

export default MyForm;
