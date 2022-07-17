import React from 'react'
import icono from '../../image/chat.png'
import style from '../card.module.css'
import {useHistory} from 'react-router-dom'
import SearchBar from '../Search'

export default function Icono() {


    const history =  useHistory()

  function Click(){
  history.push('/')
    
}
  return (
    <div>
          <button onClick={Click} className={style.boton}type="button">{
            <img src={icono} alt='imagen'width='30' height='30' />
          }</button>
    </div>
  )
}
