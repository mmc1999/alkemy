import { useContext} from "react"; 
import {useLogin} from "../hooks/useLogin";
import LoginModule from "../components/Login.module.css";
import { validationForm } from "../helpers/validationForm";
import Loader from "../components/Loader";
import UserContext from "../context/UserContext";
import {Navigate} from "react-router-dom";

export default function Login() {
    let {
        form,
        errors,
        handleChange,
        handleSubmit,
        loading
    } = useLogin(validationForm);
    let {usuario} = useContext(UserContext);
    if(usuario) return <Navigate to="/" />
    
    return(
        <section className={LoginModule.seccionForm}>
            <h1>THE MENU</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Ingrese su email" 
                    value={form.email} 
                    name="email" 
                    className={LoginModule.input}
                    onChange={handleChange}
                />
                {errors.email && <p className={`${LoginModule.error} ${LoginModule.errorMail}`}>{errors.email}</p>}
                <input 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    value={form.password} 
                    name="password" 
                    className={LoginModule.input}
                    onChange={handleChange}
                />
                {errors.password && <p className={`${LoginModule.error} ${LoginModule.errorPassword}`}>{errors.password}</p>}
                {
                    loading 
                        ? <button type="submit" className={`${LoginModule.input} ${LoginModule.button}`} disabled={true}>Enviar</button>
                        : <button type="submit" className={`${LoginModule.input} ${LoginModule.button}`}>Enviar</button>
                }
                {loading ? <Loader /> : ""}
                
            </form>
        </section>
    )
}