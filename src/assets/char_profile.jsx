import {Link, useParams} from "react-router-dom";

function Profile(props){
    const {user_id} = useParams();

    return (
        <div>
            <Link to={`/menu/${user_id}`}>Cerra</Link>
            
            <h4>Personaje:</h4>
            Vidaaaaas
            <br />
            Mana 
            <br />
            Danio
        </div>
    )
};

export default Profile;