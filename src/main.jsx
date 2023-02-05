import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./assets/char_profile";
import Exploracion from "./assets/exploracion";
import Combate from "./assets/explore_comp/combate";
import Menu from "./assets/menu";
import Mercado from "./assets/mercado";
import Ranking from "./assets/ranking";
import Registro from "./assets/registro";
import Creator from "./assets/char_create";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='registro' element={<Registro />}/>

        <Route path='menu/:user_id/create_char' element={<Creator/>}/>
        <Route path='menu/:user_id/:character_id' element={<Menu/>}>
          <Route path='character/:user_id' element={<Profile/>}/>
        </Route>
        <Route path='mercado/:user_id' element={<Mercado/>}/>
        <Route path='exploracion/:user_id' element={<Exploracion/>}/>
        <Route path='ranking/:user_id' element={<Ranking/>}/>
        <Route path='combate/:user_id' element={<Combate/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
