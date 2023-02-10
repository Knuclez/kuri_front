import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

function Profile(props){
    const {user_id} = useParams();
    const [character, setCharacter] = useState({danio: 0, vida:0, mana:0});

    useEffect(() =>{
        async function get_character(){
            const character_request = await invoke("get_character", {userId: user_id})
            const character_json = JSON.parse(character_request);
            setCharacter(character_json);
            console.log(character_json);
        }
        get_character();
    }, []);

    

    return (
        <div>
            <Link to={`/menu/${user_id}`}>Cerra</Link>
            
            <h4>Personaje:</h4>
            Vida: {character.vida}
            <br />
            Mana: {character.mana} 
            <br />
            Danio: {character.danio}
        </div>
    )
};

export default Profile;