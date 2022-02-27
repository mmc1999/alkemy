import React from 'react';
import ModuleModal from "./Modal.module.css"

export default function Modal({el, isOpen, closeModal}) {
    
    //esta funcion para detener la propagacion del evento click adentro del div para que no se cierre la etiqueta modal 
    const handleModalClick = (e) => e.stopPropagation()
    return(
        //
        <article className={`${ModuleModal.modal} ${isOpen && ModuleModal.isOpened}`}>
            <div className={ModuleModal.modalContainer} onClick={handleModalClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={ModuleModal.modalClose} onClick={closeModal}>
                    <path className={ModuleModal.path} d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
                <div>
                    <h2  className={ModuleModal.h2} >{el.title}</h2>
                    <p dangerouslySetInnerHTML={{__html: el.summary}}  className={ModuleModal.p} />
                    <p className={ModuleModal.p} >Precio del plato: $<b>{el.pricePerServing}</b></p>
                    <p className={ModuleModal.p} >Tiempo de preparacion: <b>{el.readyInMinutes}</b></p>
                    <p className={ModuleModal.p} >healthScore: <b>{el.healthScore}</b></p>
                    <p className={ModuleModal.p}>Vegano: <b>{el.vegan ? "si" : "no"}</b></p>
                    <p className={ModuleModal.p}>Vegetariano: <b>{el.vegetarian ? "si" : "no"}</b></p>
                </div>
            </div>
        </article>
    )
}