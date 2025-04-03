interface myCarinterface{
    model: string,
    color: String,
    year: number
}
const CarDetails = ({model, color, year}: myCarinterface) => {
  return (
    <div>
        <h1>O modelo do Carro é {model}</h1>
        <h1>O ano de fabricação do carro é {year}</h1>
        <h1>A Cor do carro é {color}</h1>

    </div>
  )
}

export default CarDetails