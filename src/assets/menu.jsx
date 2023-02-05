import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import {useParams, Route, Link, Outlet } from "react-router-dom";
import "./components_css/menu.css";
import Acceso from "./menu_comp/accesos";

function Menu(){
    const {user_id} = useParams();



    return(
    <div className="main-div-menu">
        <div className="div-perfil">
            <Link to={`character/${user_id}`}>Perfil</Link>
            <Outlet/>
        </div>
        
        <div className="circulo-menu">
            <Link to={`/mercado/${user_id}`} ><Acceso texto="Mercado"/></Link>
            <Link to={`/exploracion/${user_id}`} >  <Acceso texto="Exploracion"/> </Link>
            <Link to={`/ranking/${user_id}`} >  <Acceso texto="Ranking"/> </Link>
        </div>
    </div>
    );
}

export default Menu;