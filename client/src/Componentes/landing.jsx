import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../styles/landing.module.css'
import logo from '../dog.png'
import a from '../styles/landing.module.css'

export default function landing() {
  return (
    <div className={style.fondo}>
      <h1 className={a.h1}>APP DOGS🐾</h1>
      <p className={a.parrafo}>♡ Los perros son como ángeles a los que Dios en vez de alas, les dio cuatro patas y los puso en el mundo para enseñar amor.
 A veces el amor más sincero, se oculta detrás del silencio más profundo. Un ejemplo: Mi perro.
 Soy un afortunado, lo comprendo cuando siento que me siguen 4 patitas por toda la casa.
"Nunca he podido decirte que te quiero, pero siempre trato de demostrártelo". Tal parece que eso está escrito en los ojos de mi perro.</p>
    </div>
    

  )
}
