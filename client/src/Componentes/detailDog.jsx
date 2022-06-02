import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useParams} from 'react-router'
import {getDetail} from '../../src/redux/action'
import {Link} from 'react-router-dom'
import a from '../styles/detalle.module.css'

export default function DetailDog() {
    const detalles= useSelector(state => state.detailDogs)
    const dispatch = useDispatch()
    const {id} = useParams()
    

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])


  return (
      <div className={a.fondo}>
<div>
      <Link to= '/home' className={a.link}>Volver</Link>
</div>
    <div className={a.margin}>
    
           <div>
               {
                   detalles[0]? detalles.map(e => 
                    (
                       <div key={e.id}>
                            <h1 className={a.title}>{e.nombre}</h1>
                            
                            <img className={a.dogImage} src={e.imagen} alt={e.nombre} width='300' height='200'/>
                            <div className={a.title}>
                            <h2>TEMPERAMENTOS:</h2>
                            <p> 🐶{e.temperamentos}🐕</p>
                            </div>
                            <h3 >PESO:  {e.peso.metric}Kg</h3>
                            <h3>ALTURA:  {e.altura.metric} Centimetros  </h3>
                            <h3>Años De Vida:</h3>
                            <h4>{e.años_vida}</h4>
                        </div>
                    )
                    )
                    : <h1>Ya viene tu perrito 🤗</h1>

               }
           </div>
    </div>
    </div>

  )
}
