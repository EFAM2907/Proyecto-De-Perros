import React from 'react'
import {useHistory} from 'react-router-dom'
import icono from '../../image/home.png'
import s from './boton.module.css'

export default function BotonHome() {

    const navigate = useHistory()

    function Click(){
       navigate.push('/home')
    }
  return (
    <div className={s.contain}>
    
        <button className={s.boton} onClick={Click}>
            <img  src={icono} alt='icono home' width='40' height='40'/>
        </button>
    </div>
  )
}
