
import React from 'react';
import { poster_default } from '../../services/utiles';
import './CardSerie.css';

export const CardSerie = ({serie}) => {
    
    return (
        <div className='cardSerieDesign'>
            <div className='text'>{serie.tittle !== '' ? serie.tittle : "Titulo no disponible"}</div>
            <div><img className='posterDesign' src={`${poster_default}${serie.poster_path}`}/></div>
           
        </div>
    )
};

