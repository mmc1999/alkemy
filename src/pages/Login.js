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
        loading,
        handleBlur
    } = useLogin(validationForm);
    let {usuario} = useContext(UserContext);
    if(usuario) return <Navigate to="/" />
    
    return(
        <section className={LoginModule.seccionForm}>
            <form onSubmit={handleSubmit} className={LoginModule.formulario} >
                <input 
                    type="email"
                    placeholder="Ingrese su email" 
                    value={form.email} 
                    name="email" 
                    className={LoginModule.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && <p className={`${LoginModule.error} ${LoginModule.errorMail}`}>{errors.email}</p>}
                <input 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    value={form.password} 
                    name="password" 
                    className={LoginModule.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
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