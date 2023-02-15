import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api";
import {Link, useParams} from "react-router-dom";
import { Player, Monster} from "../../classes/gameplay_classes";
import "../components_css/combate.css";
import { player_take_turn, enemy_take_turn } from "./gameplay_functions";

function Combate(){
    const {user_id} = useParams();
    const [character, setCharacter] = useState(new Player(0,0,0));
    const [enemy, setEnemy] = useState(new Monster(100,10,10));
    const [turn, setTurn] = useState(0);
    const [playerPrompt, setPlayerPrompt] = useState("py");
    const [enemyPrompt, setEnemyPrompt] = useState("en");


    useEffect(() =>{
        async function get_character(){
            const character_request = await invoke("get_character", {userId: user_id})
            const character_json = JSON.parse(character_request);
            setCharacter(new Player(character_json.vida, character_json.danio, character_json.mana));
            
        }
        get_character();
    }, []);


    function do_turn(action){
        character.setear_habilidades("Perro", "la", "NadoN");
        player_take_turn(character, enemy, action);
        animate_player_turn();
        enemy_take_turn(character, enemy, action);
        animate_enemy_turn();
        setTurn(turn + 1);
    };


    return(
        <div>
            <Link to={`/exploracion/${user_id}`}>volver</Link>
            <h1>combate</h1>
            
            <div className="cuadro-vida-rival"> {enemy.vida_actual()} </div>

            <div className="cuadro-principal">
                <img src="../../images/t.png" alt="" className="cuadro-enemigo"/>
                {playerPrompt}
                    |
                {enemyPrompt}
                <img src="../../images/limon.png" alt="" className="cuadro-aliado"/>
            </div>

            <div className="cuadro-poderes">
                <div className="vida-propia"> Vida: {character.vida_actual() } | Ataque: {character.hit()}</div>
                <ul>
                    <li onClick={() => do_turn('hit_enemy')}>Golpe</li>
                    <li onClick={ () => do_turn('lanzar_habilidad1') }>Habilidad 1</li>
                </ul>
                <ul>
                    <li onClick={ () => do_turn('lanzar_habilidad2') }>Habilidad 2</li>
                    <li onClick={ () => do_turn('lanzar_habilidad3') }>Habilidad 3</li>
                </ul>
            </div>
        </div>
    )
};

export default Combate;