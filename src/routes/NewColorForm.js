import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function NewColorForm() {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({ ...fData, [name]: value }))
        console.log(e.target, e.target.name)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const colorsInLocalStorage = JSON.parse(localStorage.getItem("colorsList")) //we get a JS object
        colorsInLocalStorage.push(formData);
        localStorage.setItem( "colorsList",JSON.stringify(colorsInLocalStorage)) 
        navigate("/");
    }

    return <>
        <h1>Add a new color!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    value={formData.color}
                    name="color"
                    onChange={handleChange} />
            </label>

            <label>
                <input
                    type="color"
                    value={formData.rgb}
                    name="rgb"
                    onChange={handleChange} />
            </label>

            <button>Submit</button>
        </form>
    </>
}

