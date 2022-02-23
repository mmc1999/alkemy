import React from 'react';
import SinPlatosModule from "./SinPlatos.module.css";

export default function SinPlatos() {
    
    return (
        <div className={SinPlatosModule.divSinPlatos}>
            <p className={SinPlatosModule.title}>A tener en cuenta antes de agregar platos a tu menu: </p>
                <ul>
                    <li>Deberan ser cuatro platos o menos los que conformen el menu</li>
                    <li>Dos deben ser veganos</li>
                    <li>Dos deben deben ser carnivoros </li>
                </ul>
        </div>
    )
}