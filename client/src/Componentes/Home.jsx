import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getAllDog,orderASC, orderDESC} from '../redux/action'
import  Card  from './Card'
import SearchBar  from './Search'
import { useState } from 'react'
import Paginado from './paginacion/paginado'
import a from '../styles/home.module.css'
import { ASC,DESC } from '../redux/nombreActiones'
import Nav from './Nav'



export default function Home() {
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.perros)

    //estados de paginacion
    const [pagina, setPagina] = useState(1)
    const [dogPorPagina, setDogPorPagina] = useState(8)

     //paginacion
     const indicesPorPagina = pagina * dogPorPagina
        const indicesInicial = indicesPorPagina - dogPorPagina
        const PerrosPorPaginacion = dogs.slice(indicesInicial, indicesPorPagina) // aqui tengo mi primer perro hasta el # 7 q seria 8 en posiciones

        const paginar = (pagina) => setPagina(pagina)



        useEffect(() => {
        dispatch(getAllDog())
    }, [dispatch])



    // function handleOrderByName(e) {
    //      e.preventDefault()
    //     dispatch(ordenarPorNombre(e.target.value))
    //     setOrder("se ordeno")
    // }

  //funcion paginar 



 



    return (
        <div >
        <h1>Rey! Ahora si, Vamos a lokear 🤑🐶</h1>

        {
            //preguntar por el estado donde me guardo el nombre de la search
            <Link to ={'/create'}>
        <button />
        </Link> }


        <Nav/>

        <SearchBar/>  
      
    
  
  <Paginado 
  perrosPorpagina={dogPorPagina} 
  totalDePerros={dogs.length} 
  paginar={paginar}
   
   />
<div className={a.dogsGrid}>
      

      {
          PerrosPorPaginacion[0]? PerrosPorPaginacion.map(e => (
                <div key={e.id} className={a.AllCards}>   
                {/* <Link to={`detail/${e.id}`} > */}
              
              <Card key={e.id} 
           nombre={e.nombre} 
           imagen={e.imagen} 
           temperamentos={e.temperamentos}
           peso={e.peso}/>
             {/* </Link> */}
                </div>
          ))
          : <h1>Cargando tu pagina</h1>
          
        } </div>
      
        



    </div>
  )
  
}
