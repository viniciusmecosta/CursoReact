import "./App.css";
import { useState, useEffect, FormEvent } from "react";

function App() {
  const url: string = "http://127.0.0.1:8002/notify/email";

  const [emails, setEmails] = useState([]);
  const [name, setName] = useState("");
  const [emailPost, setEmailPost] = useState("");

  //get
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setEmails(data);
    }

    fetchData();
  }, []);

  //post
  const handleSubmit = async (e: FormEvent<Element>): Promise<void> => {
    e.preventDefault();
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: emailPost }),
    });
    setName("");
    setEmailPost("");
  };

  return (
    <>
      <h1>Lista de Email's</h1>
      <ul>
        {emails.map((email) => (
          <li key={email["id"]}>
            Nome: {email["name"]} | Email: {email["email"]}
          </li>
        ))}
      </ul>
      <div className="add-email">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label>
            Email:
            <input
              type="text"
              value={emailPost}
              name="emailPost"
              onChange={(e) => setEmailPost(e.target.value)}
            ></input>
          </label>
          <input type="submit" value={"Criar"}></input>
        </form>
      </div>
    </>
  );
}

export default App;
