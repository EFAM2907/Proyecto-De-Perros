import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../styles/landing.module.css'
import logo from '../dog.png'

export default function landing() {
  return (
    <div className={style.fondo}>
        <h1 className={style.title}>Bienvendo a tu pagina de Perreo😎</h1>
        <NavLink className={style.navlink} to='/home'>
          <h4 className={style.subTitle}>Bienvendo</h4>
        <img src={logo} alt="img not found"/>
        </NavLink>
    </div>
  )
}
