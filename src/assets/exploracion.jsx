import {Link} from "react-router-dom";
function Exploracion(){
    return(
        <div>
            <h1>Estas en exploracion!</h1>
            <Link to="/combate"><h3>A pelear!</h3></Link>
            <Link to="/menu">Volver</Link>
        </div>

    )
};

export default Exploracion;