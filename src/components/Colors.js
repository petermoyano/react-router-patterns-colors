import React from "react";
import Color from "./Color";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"


function Colors() {
    const initialColors = [{ color: "blue", rgb: "blue" }, { color: "red", rgb: "red" }, { color: "green", rgb: "green" }];
    if(JSON.parse(localStorage.getItem("colorsList")) === null){
        localStorage.setItem("colorsList", JSON.stringify(initialColors))
    }
    const colors = JSON.parse(localStorage.getItem("colorsList"));
    const showColorsList = colors.map(c => <Link to={`/${c.color}`} key={uuidv4()}><li rgb={c.rgb} key={uuidv4()}>{c.color}</li></Link>);
    return (
        <>
            <h1>Welcome to the colors factory</h1>
            <Link to="/newcolor">
                <button>Add a new Color!</button>
            </Link>
            <ul>
                {showColorsList}
            </ul>
        </>
    )
}

export default Colors;