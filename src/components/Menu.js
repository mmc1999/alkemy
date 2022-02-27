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
                    <p className={MenuModule.titleCarac}>Acumulativo del menu personalizado</p>
                    <div className={MenuModule.divDivCaract}>
                        <div className={MenuModule.divCaractericasUnicas}>
                            <p className={MenuModule.parrafoCarac}>Precio total del menu: </p><span className={MenuModule.span}>${precioTotal.toFixed(2)}</span>  
                        </div>
                        <div className={MenuModule.divCaractericasUnicas}>
                            <p className={MenuModule.parrafoCarac}>Tiempo promedio de preparacion: </p><span className={MenuModule.span}>{`${Math.floor(promTiempoPreparacion/menu.length) || "0"} min`}</span>  
                        </div>
                        <div className={MenuModule.divCaractericasUnicas}>
                            <p className={MenuModule.parrafoCarac}>Promedio de healthScore: </p><span className={MenuModule.span}>{(promHealthScore/menu.length).toFixed(1)}</span> 
                        </div>
                    </div>
                </div>
                <div className={MenuModule.divMenu2} >
                    <h1 className={MenuModule.h1}>Mi menu</h1>
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