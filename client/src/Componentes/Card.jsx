import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'


export default function Card({nombre,imagen,temperamentos, peso}) {
     

 

  return (


      <div className={style.margin}>
        <div>
          <h1 >{nombre}</h1>
       
        </div>
          <img src={imagen} alt={nombre} width='350' height='250'/>
         
        <h4>{temperamentos}</h4>
        <h3>PESO:{peso.metric}Kg</h3>
    </div>
  )
}
