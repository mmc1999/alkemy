import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import ModuleReceta from "./Receta.module.css";

export default function Receta({el, handleClick} ) {
    
    const [
        isOpen, 
        openModal,
        closeModal
    ] = useModal(false);
    const verMas = (cadena) =>  cadena.substr(0, 50) + "...";
    const tituloCortar = (cadena) => {
        if(cadena.indexOf("(") != -1) {
            let indice = cadena.indexOf("(");
            return cadena.slice(0, indice)
        }
        return cadena
    }

    return(
        <div className={ModuleReceta.divPrincipal}>
            <img src={el.image} alt={el.title} className={ModuleReceta.imagenComida} />
            <div className={ModuleReceta.divCaracteristicas}>
                <div>
                    <h3 className={ModuleReceta.titulo}>{tituloCortar(el.title)}</h3>
                    {/* dangerouslySetInnerHTML me permite leer codigo html sin etiqutas */}
                    <p dangerouslySetInnerHTML={{__html: verMas(el.summary)}}  className={ModuleReceta.parrafoCarac}/>
                </div>
                <div className={ModuleReceta.divVerClose}>
                    <button  onClick={openModal} className={ModuleReceta.verMas}>Ver mas</button>
                    <svg id={el.id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={ModuleReceta.svgImagen} onClick={handleClick}>
                        <path id={el.id} d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/>
                    </svg>
                </div> 
            </div>
            
            <Modal el={el} isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}
