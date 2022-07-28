import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getAllDog,orderASC, orderDESC,AllTemperament,ordenarPorNombre,filtrarPorTemperamento,filtrarPorRaza,OrdenarPorPeso,traerRazas} from '../redux/action'
import  Card  from './Card'
import SearchBar  from './Search'
import { useState } from 'react'
import Paginado from './paginacion/paginado'
import a from '../styles/home.module.css'

import { ASC,DESC } from '../redux/nombreActiones'




export default function Home() {
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.allPerros)
    const temper = useSelector(state => state.temperament)
    const raza = useSelector(state => state.FiltroRaza)

    

    

    //estados de paginacion
    const [pagina, setPagina] = useState(1)
    const [dogPorPagina, setDogPorPagina] = useState(6)

     //paginacion
     const indicesPorPagina = pagina * dogPorPagina
        const indicesInicial = indicesPorPagina - dogPorPagina
        const PerrosPorPaginacion = dogs.slice(indicesInicial, indicesPorPagina) // aqui tengo mi primer perro hasta el # 7 q seria 8 en posiciones

        const paginar = (pagina) => setPagina(pagina)



        useEffect(() => {
        dispatch(getAllDog(),
        dispatch(AllTemperament()))
        dispatch(traerRazas())
    }, [dispatch])



    

    //ordenar por nombre

    const[order, setOrder] = useState('')
    function handleOrderByName(e) {
         e.preventDefault()
        dispatch(ordenarPorNombre(e.target.value))
       setPagina(1)
        setOrder(e.target.value)
    }

    
    
    
    //funcion filtrado por Temperamentos


  function handleFilterTemperament(e) {
      e.preventDefault()
      dispatch(filtrarPorTemperamento(e.target.value))
      setPagina(1)
     
    }

  // filtrado por raza

    function handleFilterRaza(e) {
      e.preventDefault()
      dispatch(filtrarPorRaza(e.target.value))
      setPagina(1)

     
  }

   



 // regresar a home - REFRES
   function handleClick(e) {
    e.preventDefault()
    dispatch(getAllDog(e))
    setPagina(1)
      
   }
    

   // ordenar por Peso
   const[peso, setPeso] = useState('')
   function handleOrderByPeso(e) {
    e.preventDefault()
    dispatch(OrdenarPorPeso(e.target.value))
    setPagina(1)
    setPeso(e.target.value)
}
 



    return (
   <div >
      

          
    <div  className={a.todo}>
      <div >
      <SearchBar/>
        <div className={a.select}>
         <select onChange ={(e)=> handleFilterTemperament(e)}>
          <option  value="">TEMPERAMENTOS</option>
            {temper.map((temperament, index) => (
                <option key={index} value={temperament.nombre}>{temperament.nombre}</option>
            ))}
         </select>
        </div>

        <div className={a.select}>
          <select  onChange={e => handleFilterRaza(e)}>
            <option value="">razas</option>
            {raza.map((raza, index) => (
                <option key={index} value={raza.nombre}>{raza.nombre}</option>
            ))}
          </select>
        </div>
        
        <div className={a.select}>
        <select  onChange ={(e)=> handleOrderByName(e)}>
          <option value="">orden</option>
          <option value={ASC}>ascendente</option>
          <option value={DESC}>descendente</option>
        </select>
        </div>

        <div className={a.select}>
          <select   onChange ={(e)=> handleOrderByPeso(e)} >
            <option value="">pesos</option>
            <option value="pesoASC">Peso ↑</option>
            <option value="pesoDESC">Peso ↓</option> 
          </select>
        </div>
        <br />
        <div> <img src='https://i.pinimg.com/originals/d6/f2/8c/d6f28c9e6c7d6edb52083e9097611574.jpg' alt='imagen' /></div>
     
      
   </div>

  
    
  
    <div >
  

       { PerrosPorPaginacion[0] === 'No se encontro el Nombre de tu perro🐶'?
        <div>
        <h1> Este Perro no existe, ve y crealo friend</h1>
        <img src={'http://www.canalgif.net/Gifs-animados/Animales-terrestres/Perros/Imagen-animada-Perro-101.gif'} alt='imagen' width='200' height='150'/>
       </div>
        :
        
        PerrosPorPaginacion[0]?
          <div className={a.size}>
          
          {
            PerrosPorPaginacion.map(e => (
                <div key={e.id} >   
                <Link to={`detail/${e.id}`} >
              
              <Card key={e.id} 
           nombre={e.nombre} 
           imagen={e.imagen} 
           temperamentos={e.temperamentos ? e.temperamentos : e.Temperaments.map(e => e.nombre).join(', ')}
           peso={e.peso ? e.peso : `${e.peso_min}-${e.peso_max}`}/>
             </Link>

                </div>

          )
          )
            }
            </div>

          :  
           <img src={'http://www.canalgif.net/Gifs-animados/Animales-terrestres/Perros/Imagen-animada-Perro-382.gif'} alt="loading" />
          
            
          }</div>
      
        


    </div>
<Paginado 
  perrosPorpagina={dogPorPagina} 
  totalDePerros={dogs.length} 
  paginar={paginar}
   
   />
    
    </div>
  )
  
}
