import React from "react";
import cartWidget from "./cartWidget";

export const NavBar = () => {
    return <div>
        <h1>Almacer Piña colada</h1>
        <ul>
            <li><a href=""> Productos </a></li>
            <li><a href=""> Galeria </a></li>
            <li><a href=""> Nosotros </a></li>
        </ul>
        <cartWidget />
    </div>
};