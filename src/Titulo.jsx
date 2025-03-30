import { useState } from "react";
function Titulo({ cor }) {
    const [texto, setTexto] = useState("Um titulo do estado inciial")
    return (
        <div>
            <h1 style={{ color: cor }}>{texto} </h1>
            <button onClick={() => { setTexto("mudei via botao") }}></button>
        </div>
    )
}

export default Titulo