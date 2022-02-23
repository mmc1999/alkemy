import axios from "axios"
import { useEffect, useState } from "react";

export const api = (url) => {
    const [datos, setDatos] = useState([]);
    let headers = {
        "Content-Type": "application/json"
    }
    useEffect(() => {
        axios.get(url, headers)
          .then((response) => {
            setDatos(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [url]);
    
    return {
      datos,
      setDatos
    }
}