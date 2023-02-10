import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  let [usuario, setUsuario] = useState("");
  let [pass, setPass] = useState("");
  let [loginState, setLoginState] = useState("");
  let [userId, setUserId] = useState(null);
  let [characterState, setCharacterState] = useState(null);


  async function try_login_js() {
    var response = await invoke("try_login", {username: usuario, pass: pass});
    setLoginState(response);
    
    if (response != "Bad_credentials" && response != "User_is_not_registered") {
      const jason = JSON.parse(response);
      setUserId(jason.id);
      check_for_character(String(jason.id));
    }
  }

  async function check_for_character(u_id){
    var response = await invoke("check_for_character", {userId: u_id});
    setCharacterState(response);
  }

  function renderAnswer() {
    if (userId != null) {
      
      if (characterState == "User_haves_char"){
        return (
        <div>
          <Link to={`/menu/${userId}`}>
            <button type="button" >
              Acceder
            </button>
          </Link>
        </div>)
      } else {
        return (
          <div>
            <Link to={`/menu/${userId}/create_char`}>
              <button type="button" >
                Acceder
              </button>
            </Link>
          </div>)
      } 
    } else {
      return <h3>{loginState}</h3>
    }
  }


  return (
    <div className="container">
      <h1> MiniDung</h1>
      <div>
        <input
          id="greet-input"
          placeholder="Enter a user..."
          onChange={e => setUsuario(e.target.value)}/>

        <input
          id="greet-input"
          placeholder="Enter a password..."
          onChange={e => setPass(e.target.value)}/>

        <Link to="/registro">
          <button type="button">
            Registrarse
          </button>
        </Link>

        <button type="button" onClick={() => try_login_js()}>
          Login
        </button>
      </div>   
      {renderAnswer()}
    </div>
  );
}

export default App;



