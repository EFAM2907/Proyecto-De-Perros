import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useParams} from 'react-router'
import {getDetail, removerDetalle, deleteDog } from '../../src/redux/action'
import {Link} from 'react-router-dom'
import a from '../styles/detalle.module.css'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function DetailDog() {
    const detalles= useSelector(state => state.detailDogs)
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        dispatch(removerDetalle())
        dispatch(getDetail(id))
    }, [dispatch, id])

  function handleDelete(e){
      e.preventDefault()

        if(id.includes('-')){
            dispatch(deleteDog(id))
            
            history.push('/home')
            Swal.fire('Perro eliminado 👻')
           
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Solo se borran los que tu creas !',
               
              })
        }
  }

  function Volver(){
    history.push('/home')
  }



  return (
      <div >
     <div>
    <div className={a.margin}>
            
               {
               id.includes('-')?
               <div>
                <div className={a.botones} >
               <button className={a.button} onClick={handleDelete}>Eliminar🚫</button>
               <button className={a.volver} onClick={Volver}>Volver🐾</button></div>
               {

               
                   detalles[0]? detalles.map(e => 
                    (     <div className={a.grid}>
                        <div>
                          <h1 className={a.title}>{e.nombre}</h1>
                           <img className={a.dogImage} src={e.imagen} alt={e.nombre} width='500' height='400'/>

                        </div>


                       <div className={a.deta} key={e.id}>
                            
                        
                            <h3 className={a.title}>PESO:  {e.peso ? e.peso : `${e.peso_min}-${e.peso_max}`} Kg</h3>
                            <h3 className={a.title}>ALTURA:  {e.altura ? e.altura : `${e.altura_min}-${e.altura_max}`} Centimetros  </h3>
                            <h3 className={a.title}>Años De Vida:</h3>
                            <h4 >{e.años_vida}</h4>
                            <h2 className={a.title}>Temperamentos:</h2>
                            <p> 🐶{e.temperamentos ? e.temperamentos : e.Temperaments?.map(e => e.nombre).join(',')}🐕</p>
                        </div></div>
                    )
                    )
                    : <img src={'http://www.canalgif.net/Gifs-animados/Animales-terrestres/Perros/Imagen-animada-Perro-06.gif'} alt="nada"   width="400" height="200"/>
                    }  </div>:<div>
                    <button className={a.volver2}onClick={Volver}>Volver🐾</button>

                    {

               
                        detalles[0]? detalles.map(e => 
                         (     <div className={a.grid}>
                             <div>
                               <h1 className={a.title}>{e.nombre}</h1>
                                <img className={a.dogImage} src={e.imagen} alt={e.nombre} width='500' height='400'/>
     
                             </div>
     
     
                            <div className={a.deta} key={e.id}>
                                 
                             
                                 <h3 className={a.title}>PESO:  {e.peso ? e.peso : `${e.peso_min}-${e.peso_max}`} Kg</h3>
                                 <h3 className={a.title}>ALTURA:  {e.altura ? e.altura : `${e.altura_min}-${e.altura_max}`} Centimetros  </h3>
                                 <h3 className={a.title}>Años De Vida:</h3>
                                 <h4 >{e.años_vida}</h4>
                                 <h2 className={a.title}>Temperamentos:</h2>
                                 <p> 🐶{e.temperamentos ? e.temperamentos : e.Temperaments?.map(e => e.nombre).join(',')}🐕</p>
                             </div></div>
                         )
                         )
                         : <img src={'http://www.canalgif.net/Gifs-animados/Animales-terrestres/Perros/Imagen-animada-Perro-06.gif'} alt="nada"   width="400" height="200"/>
                         } </div> 

               }
           </div>
    </div>
    </div>

  )
}
