import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'
import a from '../styles/detalle.module.css'
import icono from '../image/chat.png'
import SearchBar from '../Componentes/Search'
import{useHistory} from 'react-router-dom'

export default function Card({nombre,imagen,temperamentos }) {
     
  return (
  
    <div>

      <div className={style.margin}>
        <div className={style.tamaño}>
          <img src={imagen} alt={nombre} width='200' height='200'/>
          <h1 className={style.h1}>{nombre}</h1>
       
         </div>
       
    </div>
        <div>
          {/* <button onClick={Click} className={style.boton}type="button">{
            <img src={icono} alt='imagen'width='30' height='30' />
          }</button> */}
        </div></div>

//     <div className="card" >
//   <img src={imagen} className="card-img-top" alt="es una imagen" />
//   <div className="card-body">
//     <h5 className="card-title">{nombre}</h5>
//     <p className="card-text">{temperamentos}</p>
//   </div>
 
//  </div>



  )
}
