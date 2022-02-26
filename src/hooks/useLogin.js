import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import sweetAlert from "sweetalert";
import {Navigate} from "react-router-dom";

const initialValue = {
    email:"",
    password:""
}

export const useLogin = (validationForm) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(initialValue);
    const [errors, setError] = useState({});
    let {setUsuario} = useContext(UserContext);
    let url = "https://node-api-proxy-alkemy.herokuapp.com/";
    let body = {
        email: form.email,
        password: form.password
    }
    

    const iniciarSesion = () => {
        setLoading(true);

        setTimeout(() => {
            axios({
                method: 'post',
                //headers: { 'Content-Type': 'application/json'},
                url: url,
                data: body
            })
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                setLoading(false);
                setUsuario(true);
                <Navigate to="/" />
            })
            .catch((err) => {
                //AGREGAR ALERT SWEET ACA
                sweetAlert("La API ha fallado", "Vuelva a intentarlo por favor");
                setLoading(false);
                console.log(err);
            });
        }, 2000);
          
        
      };

    const handleChange = (e) => {    
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(e);
        setForm(initialValue);
        setError(validationForm(form));
        iniciarSesion();
    }

    const handleBlur = (e) => {
        handleChange(e);
        setError(validationForm(form));
    }

    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        loading,
        handleBlur
    }
}
