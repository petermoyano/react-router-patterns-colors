import React from "react";
import {useParams, useNavigate} from "react-router-dom"


function Color(){
    const Navigate = useNavigate();
    const colorInURL = useParams().color;
    const colorsList = JSON.parse(localStorage.getItem("colorsList"));
    const rgb = colorsList.filter(c => c.color === colorInURL)[0]
    return (<>
    <h1 style={{color: rgb.rgb}}> You've reached the {colorInURL} page</h1>
    <p style={{backgroundColor: rgb.rgb}}>Preety neat</p>
    </>)
}

export default Color;