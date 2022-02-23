import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [usuario, setUsuario] = useState(false);
    const token = Boolean(localStorage.getItem("token"));

    useEffect(() => {
        if(!token){
            setUsuario(false);
        } else {
            setUsuario(true);
        }
    }, [usuario]);

    const data = {usuario, setUsuario}

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export {UserProvider}
export default UserContext