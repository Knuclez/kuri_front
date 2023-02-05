import { useState } from "react";
import {Link} from "react-router-dom";
import "../components_css/combate.css";

function Combate(){
    const [s1, setS1] = useState("spell 1");
    const [enemy_hp, setEnemy_hp] = useState(100);
    const [my_hp, setMy_hp] = useState(100);
    
    return(
        <div>
            <Link to="/exploracion">volver</Link>
            <h1>combate</h1>
            
            <div className="cuadro-vida-rival"> {enemy_hp} </div>

            <div className="cuadro-principal">
                <img src="./images/t.png" alt="" className="cuadro-enemigo"/>
                <h1>a rellenar</h1>
                <img src="./images/limon.png" alt="" className="cuadro-aliado"/>
            </div>

            <div className="cuadro-poderes">
                <div className="vida-propia"> {my_hp}</div>
                <ul>
                    <li>{s1}</li>
                    <li>poder 2</li>
                </ul>
                <ul>
                    <li>poder 3</li>
                    <li>poder 4</li>
                </ul>
            </div>
        </div>
    )
};

export default Combate;