import React, { useContext } from 'react';
import MenuContext from '../context/MenuContext';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import NuevaRecetaModule from "./NuevaReceta.module.css";

export default function NuevaReceta({el}) {

    let {handleClick1} = useContext(MenuContext);
    //console.log(el)
    const [
        isOpen, 
        openModal,
        closeModal
    ] = useModal(false);
    
    //const verMas = (cadena) => cadenaCortada = cadena.substr(0, 135) + "...";
    const title = (cadena) => cadena.length < 40 ? cadena : cadena.substr(0, 45) + "...";


    return(
        <div className={NuevaRecetaModule.divPrincipal}  >
                <div>
                    <img src={el.image} alt={el.title} className={NuevaRecetaModule.imagenComida} />
                </div>
                {/*<div className={NuevaRecetaModule.divCaracteristicas}></div>*/}
                <div className={NuevaRecetaModule.divTitle}>
                    <h3 className={NuevaRecetaModule.nombreComida}>{title(el.title)}</h3>
                </div>
                {/*<p dangerouslySetInnerHTML={{__html: verMas(el.summary)}}  />*/}
                <div className={NuevaRecetaModule.divVerClose}>
                    <p onClick={openModal} className={NuevaRecetaModule.verMas}>Ver mas</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={()=> handleClick1(el)}  id={el} className={NuevaRecetaModule.imagen}>
                        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
                    </svg>
                </div>
                <Modal el={el} isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}