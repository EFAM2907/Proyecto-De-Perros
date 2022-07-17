import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {BuscarPorName} from '../redux/action'
import {Link} from 'react-router-dom'
import b from '../styles/search.module.css'


export default function SearchBar() {

    const dispatch = useDispatch()
    const [nombreDelDog, setNombreDelDog] = useState("")

    function handerChange(e) {
      e.preventDefault()
        setNombreDelDog(e.target.value)}
    
    

        function handleSubmit(e) {
          setNombreDelDog("")
          e.preventDefault()
          dispatch(BuscarPorName(nombreDelDog))
        }
        

  return (
    <div >
 
       <div  className={b.control}>
      <input  className={b.input} type="search" placeholder='Busca Nombre de raza' value={nombreDelDog} onChange={(e)=> handerChange(e)}/>  
      <button  className={b.boton}type="submit" onClick={(e)=>  handleSubmit(e)}>Buscar</button></div >
  
    </div>
  )
}
