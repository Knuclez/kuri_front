import { useState } from "react";
import {Link} from "react-router-dom";

function Mercado() {
    let json_generico = {"nombre" : "nombre item 1", "valor" : 100, "descripcion" : "alta descripcion bro"};
    const [item1, setItem1] = useState(json_generico);
    return (
        <div>
            <h1>Estas en el mercado</h1>
            <table>
             <tr>
                <th>Objeto</th>
                <th>Atributos</th>
                <th>Valor</th>
             </tr>
             <tr>
                <td>tu seniora</td>
                <td>+10 vida</td>
                <td>0 de oro</td>
             </tr>
             <tr>
                <td>bf sword</td>
                <td>+14 de danio</td>
                <td>10 de oro</td>
            </tr>
            <tr>
                <td>{item1.nombre}</td>
                <td>{item1.descripcion}</td>
                <td>{item1.valor}</td>
              </tr>
            </table>
            <Link to="/menu">Volver</Link>
        </div>
    )
};

export default Mercado;