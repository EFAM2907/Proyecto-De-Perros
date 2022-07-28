import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'
import a from '../styles/detalle.module.css'
import icono from '../image/chat.png'
import SearchBar from '../Componentes/Search'
import{useHistory} from 'react-router-dom'

export default function Card({nombre,imagen,temperamentos }) {
     
  return (
      <div className={style.margin}>
        <div className={style.tamaño}>
          <img src={imagen} alt={nombre} width='200' height='200'/>
          <h1 className={style.h1}>{nombre}</h1>
        </div>
     </div>
  )
}
