import "./App.css";
import MyForm from "./components/MyForm";
import {User} from "./components/User.ts";
function App() {
    const user: User = {id:1, name:"Vincius", email:"Vinicius@gmail.com", bio:"Sou um trabalhador", role:"admin"};
  return (
    <>
      <MyForm user={user}></MyForm>
    </>
  );
}

export default App;
