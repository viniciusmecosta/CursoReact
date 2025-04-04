import { Car } from "./Car";
import styles from "./CarDetails.module.css";

interface ListCar {
  listCar: Car[];
}

const CarDetails = (Cars: ListCar) => {
  return (
    <div>
      {Cars.listCar.map((car) => (
        <h1 className={styles.h1_car}>
          O carro com modelo: {car.model} e cor: {car.color} foi lançado em{" "}
          {car.year}.
        </h1>
      ))}
    </div>
  );
};

export default CarDetails;
