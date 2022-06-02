import React from 'react'
import style from '../../styles/paginado.module.css'

export default function Paginado({perrosPorpagina, totalDePerros, paginar}) {
    const a = []
    for(let i = 1; i <= Math.ceil(totalDePerros/perrosPorpagina); i++){
        a.push(i)
    }
    return (
        
    <div className={style.nav}>
      <ul className={style.paginado}>
        {a && a.map(e => (
            <li className={style.number} key={e}>
                <a className={style.img} onClick={() => paginar(e)} href="#">{e}</a>
            </li>
                ))}

      </ul>
    </div>
  )
}
