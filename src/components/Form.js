import { useState } from "react"
import {Formik} from "formik";
import {useApi} from "../hooks/useApi"
import BasicForm from "./BasicForm";

/*const apiKey = "6cf72b368d5544a5bf961a19b4bfe942";
const apiKey2 = "e523226d52d94a87872923c6c5130fee";
const apiKey3 = "7c23e4c2e42041ce8c18b32b47371b5d";
const apiKey4 = "c2523e962c50421f824985aed4f8132a";
const apiKey7 = "ecab9e2bb8c0489d9d92f15c3d0f8412";*/
const apiKey5 = "561b6d36731e4a3080bd6d01e0d1a2be";
const apiKey6 = "f65d590a7ec141e6ad7aa94dde381aed";

let urlInicial = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey6}&query=pasta&addRecipeInformation=true&number=50`;


export default function Form() {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(urlInicial);
    let expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,}$/;

    let {
        datos
    } = useApi(url)
    
    return(
        <>
            <div>
                <Formik
                    initialValues={{
                        comida:""
                    }}
                    validate={values => {
                        let errors = {};
                        if (!values.comida) {
                            setLoading(false)
                            datos = []
                        } else if(values.comida.length === 2 || values.comida.length === 1){
                            setLoading(true)
                            errors.comida = "El campo debe tener mas de dos caracteres";
                        } else if(!expresionRegularNombre.test(values.comida)) {
                            setLoading(true)
                            errors.comida = 'No se permiten numeros';
                        } else if(expresionRegularNombre.test(values.comida)) {
                            setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey5}&query=${values.comida}&addRecipeInformation=true&number=100`);
                            setLoading(false)
                        }
                        return errors;
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    
                >
                    {(props) => <BasicForm {...props} loading={loading} datos={datos} />}
                </Formik>
            </div>
            
        </>
    )
}