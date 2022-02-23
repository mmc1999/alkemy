import {  useState } from "react"
import { api } from "./api";

const apiKey = "6cf72b368d5544a5bf961a19b4bfe942";
const apiKey2 = "e523226d52d94a87872923c6c5130fee";
/*const apiKey3 = "7c23e4c2e42041ce8c18b32b47371b5d";
const apiKey4 = "c2523e962c50421f824985aed4f8132a";
const apiKey5 = "561b6d36731e4a3080bd6d01e0d1a2be";
const apiKey6 = "f65d590a7ec141e6ad7aa94dde381aed";
const apiKey7 = "ecab9e2bb8c0489d9d92f15c3d0f8412";*/
const initialForm = {
    comida:""
}
let urlInicial = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey2}&query=pasta&addRecipeInformation=true&number=100`;

export const usePeticionFormMenu = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [url, setUrl] = useState(urlInicial);

    let {
        datos
    } = api(url);

    const handleChange = (e) => {
        setLoading(true)
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
        setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${form.comida}&addRecipeInformation=true&number=100`);
        setLoading(false)
    }
    const handleSubmit = (e) => e.preventDefault();
    
    return {
        form,
        datos,
        loading,
        handleChange,
        handleSubmit
    }
}