import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api";
import {Link, useParams} from "react-router-dom";
import { Player, FighterEntity } from "../../classes/gameplay_classes";
import "../components_css/combate.css";

function Combate(){
    const {user_id} = useParams();
    const [enemy_hp, setEnemy_hp] = useState(100);
    const [enemy_dmg, setEnemy_dmg] = useState(25);
    const [character, setCharacter] = useState(new FighterEntity(0,0,0));

    useEffect(() =>{
        async function get_character(){
            const character_request = await invoke("get_character", {userId: user_id})
            const character_json = JSON.parse(character_request);
            setCharacter(new FighterEntity(character_json.vida, character_json.danio, character_json.mana));
            
        }
        get_character();
    }, []);

    function do_turn(action){
        console.log()
        switch (action){
            case 'hit_enemy':
                hit_enemy();
                break;
            default:
                console.log("no action taken");
        }
        enemy_take_turn();
    };

    function hit_enemy(){
        setEnemy_hp(enemy_hp - character.danio);
    };
    
    function enemy_take_turn(){
        hit_player()
    };

    function hit_player(){
        setCharacter({danio: character.danio, vida: character.vida - enemy_dmg, mana:character.mana})
    };
    return(
        <div>
            <Link to={`/exploracion/${user_id}`}>volver</Link>
            <h1>combate</h1>
            
            <div className="cuadro-vida-rival"> {enemy_hp} </div>

            <div className="cuadro-principal">
                <img src="../../images/t.png" alt="" className="cuadro-enemigo"/>
                <h1>a rellenar</h1>
                <img src="../../images/limon.png" alt="" className="cuadro-aliado"/>
            </div>

            <div className="cuadro-poderes">
                <div className="vida-propia"> Vida: {character.vida_actual()} | Ataque: {character.danio()}</div>
                <ul>
                    <li onClick={() => do_turn('hit_enemy')}>Golpe</li>
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