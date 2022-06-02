import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {BuscarPorName} from '../redux/action'
import {Link} from 'react-router-dom'


export default function SearchBar() {

    const dispatch = useDispatch()
    const [nombreDelDog, setNombreDelDog] = useState("")

    function handerChange(e) {
      e.preventDefault()
        setNombreDelDog(e.target.value)}
    
        function handleSubmit(e) {
          e.preventDefault()
          dispatch(BuscarPorName(nombreDelDog))
        }
        

  return (
    <div>
        <Link to={'/create'}>
        <button>CREA TU PERRO</button>
        </Link>

      <input type="search" placeholder='name' value={nombreDelDog} onChange={(e)=> handerChange(e)}/>
      <button type="submit" onClick={(e)=>  handleSubmit(e)}>Buscar</button>
    </div>
  )
}
