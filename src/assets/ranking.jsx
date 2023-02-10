import {Link, useParams} from "react-router-dom";
function Ranking() {
    const {user_id} = useParams();
    return (
        <div>
            <h1>Estas en el ranking</h1>
            <Link to={`/menu/${user_id}`}>Volver</Link>
        </div>
    )
};

export default Ranking; 