import "./App.css";
import logo from "./assets/logo.png";
import CarDetails from "./components/CarDetails";
import ShowUserName from "./components/ShowUserName";
function App() {
  interface Car {
    id: number;
    model: string;
    color: string;
    year: number;
  }

  const cars: Car[] = [
    { id: 1, model: "Corolla", color: "Azul", year: 2009 },
    { id: 2, model: "Fit", color: "Vermelho", year: 2015 },
    { id: 3, model: "Kwid", color: "Preto", year: 2020 },
    { id: 4, model: "Hb20", color: "Verde", year: 2024 },
  ];
  return (
    <>
      <div>
        <h1>Seção 3</h1>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <ShowUserName name="Vinicius" age={20} />
          {cars.map((car) => (
            <CarDetails model={car.model} color={car.color} year={car.year} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
