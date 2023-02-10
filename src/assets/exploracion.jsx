import {Link, useParams} from "react-router-dom";
function Exploracion(){
    const {user_id} = useParams();
    return(
        <div>
            <h1>Estas en exploracion!</h1>

            <Link to={`/combate/${user_id}`}><h3>A pelear!</h3></Link>
            <Link to={`/menu/${user_id}`}>Volver</Link>
        </div>

    )
};

export default Exploracion;