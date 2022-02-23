import react, { useContext }  from "react";
import {Navigate} from "react-router-dom";
import Menu from "../components/Menu";
import UserContext from "../context/UserContext";


export default function Home() {
    let {usuario} = useContext(UserContext);
    if(!usuario) return <Navigate to="/login" />
    
    return(
        <>
            <Menu />
        </>
    )
}