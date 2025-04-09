import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const url: string = "http://127.0.0.1:8002/notify/email";

  const [emails, setEmails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setEmails(data);
    }

    fetchData();
  }, []);
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
    </>
  );
}

export default App;
