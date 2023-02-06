import React from 'react';
import './CardRental.css';

export const CardRental = ({ rental }) => {

    return (
        <div className='cardRentalDesign'>
            <div>Datos alquiler</div>
            <div>Usuario: {rental.nameRental !== '' ? rental.nameRental : "nameRental"}</div>
            <div>Serie: {rental.tittleRental !== '' ? rental.tittleRental : "tittleRental"}</div>
            <div>Fecha alquiler: {rental.inicioFecha !== '' ? rental.inicioFecha : "inicioFecha"}</div>
            <div>Fecha devolucion: {rental.finFecha !== '' ? rental.finFecha : "finFecha"}</div>
        </div>
    )
}