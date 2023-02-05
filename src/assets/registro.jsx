import { useState } from "react";
import {Link} from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import "../App.css"

function Registro(){
    let [usuario, setUsuario] = useState("");
    let [pass, setPass] = useState("");
    let [registerState, setRegisterState] = useState("");

    async function try_register_js() {
        var response = await invoke("try_register", {username: usuario, pass: pass});
        setRegisterState(response);
    }
    return(
        <div className="container">
            <h1>Ingrese sus datos de registro</h1>

            <input
            id="greet-input"
            placeholder="Enter a user..."
            onChange={e => setUsuario(e.target.value)}/>

            <input
            id="greet-input"
            placeholder="Enter a password..."
            onChange={e => setPass(e.target.value)}/>

            <button type="button" onClick={() => try_register_js()}>
                Registrarse
            </button>
            <Link to="/">Volver</Link>

            <h3>{registerState}</h3>
        </div>
    );
}

export default Registro;