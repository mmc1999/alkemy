import axios from "axios"
import { useEffect, useState } from "react";

export function useApi(url) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios.get(url)
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
  };
}