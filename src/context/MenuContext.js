import { createContext, useEffect, useState } from "react";
import Menu from "../components/Menu";

const MenuContext = createContext();


const MenuProvider = ({children}) => {
    let initialValue = Boolean(JSON.parse(localStorage.getItem("menu")))== false
        ? []
        : JSON.parse(localStorage.getItem("menu"));
    const [menu, setMenu] = useState(initialValue);
    const [operacion, setOperacion] = useState(false);
    const [promHealthScore, setPromHealthScore] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [promTiempoPreparacion, setPromTiempoPreparacion] = useState(0);


    const handleClick1 = (el) => {
        
        let confirmar = confirm(`¿Seguro que desea agregar el plato ${el.title}?`);
        
        if(confirmar && menu.length+1 <= 4) {
            let {platoConCarne, platosVeggie} = contarPlatosVeganoOno(el);
            //agrega el plato si el menu es cero
            if(menu.length===0) {
                setMenu([...menu, el]);
                contarPlatosVeganoOno(el)
                setOperacion(false)
            } else if(!el.vegan && platoConCarne> 2) { //hacer la comparacion de los veganos y carnivoros
                alert("No puede agregar un plato mas con carne. Debera eliminar uno de su menu")
            }else if(el.vegan && platosVeggie> 2) {
                alert("No puede agregar un plato mas vegano. Debera eliminar uno de su menu")
            } else {
                if(menu.find(ele=> ele.id == el.id)) {
                    alert("No puedes agregar el mismo plato al menu.")
                } else { //agrega el plato si no es el mismo plato
                    setMenu([...menu, el])
                    contarPlatosVeganoOno(el)
                    setOperacion(false)
                }
            }
        } else if(confirmar && menu.length+1 > 4) {
            alert("No puedes agregar mas platos al menu.")
        }
    }
    
    useEffect(() => { 
        if(!operacion) {
            menu.forEach(el => {
                setPromHealthScore(promHealthScore + el.healthScore)
                setPrecioTotal(precioTotal + el.pricePerServing);
                setPromTiempoPreparacion(promTiempoPreparacion + el.readyInMinutes);
            });
        }
    }, [menu]);

    const handleClick = (e) => {
        setMenu(menu.filter(dato => dato.id != e.target.id));
        let elemento = menu.find(ele=> ele.id == e.target.id);
        setOperacion(true)
        setPromHealthScore(promHealthScore - elemento.healthScore)
        setPrecioTotal(precioTotal - elemento.pricePerServing);
        setPromTiempoPreparacion(promTiempoPreparacion - elemento.readyInMinutes);
    };
    
    

    const contarPlatosVeganoOno = (el) => {
        let platosVeggie = 0;
        let platoConCarne = 0;
        menu.forEach((elemento) => elemento.vegan ? platosVeggie++ : platoConCarne ++);
        switch (el.vegan) {
            case true:
                platosVeggie++;
                break;
            case false:
                platoConCarne++;
                break
            default:
                console.log("que se yo");
                break;
        }
        return {
            platoConCarne,
            platosVeggie
        }
    }

    useEffect(() => {
        setPrecioTotal(0);
        setPromHealthScore(0);
        setPromTiempoPreparacion(0);
        menu.forEach(el => {
            setPromHealthScore(promHealthScore => promHealthScore + el.healthScore);
            setPrecioTotal(precioTotal => precioTotal + el.pricePerServing);
            setPromTiempoPreparacion(promTiempoPreparacion => promTiempoPreparacion + el.readyInMinutes);
        });
    }, []);
    const data = {menu, setMenu, promHealthScore, precioTotal, promTiempoPreparacion, setPrecioTotal, setPromHealthScore, setPromHealthScore, handleClick, handleClick1};

    return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
}

export {MenuProvider}
export default MenuContext