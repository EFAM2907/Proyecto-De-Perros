import React from 'react'
import { getAllDog,orderASC, orderDESC, ordenarPorNombre, AllTemperament, filtrarPorTemperamento} from '../redux/action'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ASC,DESC } from '../redux/nombreActiones'
import {useEffect} from 'react'



export default function Nav() {

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.perros)
    const temper = useSelector(state => state.temperament)

    useEffect(() => {
        dispatch(AllTemperament())
    }, [dispatch])

    
    const handerChangeOder=(e)=>{
        if(e.target.value === ASC){
        dispatch(orderASC(dogs))
        }if (e.target.value === DESC){
            dispatch(orderDESC(dogs))
        }}



    const [order, setOrder] = useState(ASC)

     function handleOrderByName(e) {
         e.preventDefault()
        dispatch(ordenarPorNombre(e.target.value))
        setOrder("se ordeno")
    }

    function handleFilterTemperament(e) {
        e.preventDefault()
       dispatch(filtrarPorTemperamento(e.target.value))
   }



  return (
    <div>
            <div>
        <select onChange ={e => handleOrderByName(e)}>
          <option value="">orden</option>
          <option value={ASC}>ascendente</option>
          <option value={DESC}>descendente</option>
        </select>
      </div>
        <div>
        <select onChange ={(e)=> handleFilterTemperament(e)}>
          <option value="">TEMPERAMENTOS</option>
            {temper.map((temperament, index) => (
                <option key={index} value={temperament.nombre}>{temperament.nombre}</option>
            ))}
        </select>
        </div>


    </div>

  )
}
