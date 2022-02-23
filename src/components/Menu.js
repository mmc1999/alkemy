import MenuModule from "./Menu.module.css";
import Receta from "./Receta";
import Form from "./Form";
import SinPlatos from "./SinPlatos";
import { useContext } from "react";
import MenuContext from "../context/MenuContext";

export default function Menu() {
    
    let {
        menu,
        handleClick,
        promHealthScore,
        precioTotal,
        promTiempoPreparacion,
    } = useContext(MenuContext);
    

    localStorage.setItem("menu", JSON.stringify(menu));

    return(
        <div className={MenuModule.divPadre}>
                <div className={MenuModule.divMenu}>
                    <p className={MenuModule.titleCarac}>Caracteriticas principales de tu menu</p>
                    <p>Precio total del menu: <span className={MenuModule.span}>${precioTotal.toFixed(2)}</span>  </p>
                    <p>Tiempo promedio de preparacion: <span className={MenuModule.span}>{`${Math.floor(promTiempoPreparacion/menu.length) || 0} minutos`}</span>  </p>
                    <p>Promedio de healthScore: <span className={MenuModule.span}>{(promHealthScore/menu.length).toFixed(2)}</span> </p>
                </div>
                <div className={MenuModule.divMenu2} >
                    <h1 className={MenuModule.h1}>Menu personalizado</h1>
                    <div>
                        {
                            menu.length === 0 
                                ? <SinPlatos />
                                : (<div className={MenuModule.divMenuPersonalizado}>
                                    {menu.map(el => 
                                        <Receta key={el.id} el={el} handleClick={handleClick}  />
                                    )}
                                </div>)
                        }
                    </div>
                    
                </div>
                <div>
                    <Form  />
                </div>
        </div>
        
    )
}