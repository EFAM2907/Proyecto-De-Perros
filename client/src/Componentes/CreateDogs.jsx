import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AllTemperament } from '../redux/action'
import {useState, useEffect} from 'react'

function validar(input){
    let error = {}
        if(!input.nombre){
            error.name = 'El nombre es requerido'
        }
        else if(!input.temperamentos.length){ 
            error.temperament = 'Debe seleccionar al menos un temperamento'
        }else if(input.temperamentos.length > 3){
            error.maximo = 'Debe seleccionar como maximo 3 temperamentos😎'}
    
    return error;
}


export default function CreateDogs() {
    
    const dispatch = useDispatch()
    const temperament = useSelector(state=> state.temperament)

    useEffect(() => {
        dispatch(AllTemperament())
    }, [dispatch])

    const [error, setError] = useState({})

    const [input, setInput] = useState({
        nombre: '',
        peso: "",
        altura: "",
        hp: "",
        temperamentos: []
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validar({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperamentos: [...input.temperamentos, e.target.value]
        })
        setError(validar({
            ...input,
            temperamentos: [...input.temperamentos, e.target.value]
    }))}

    function handleSubmit(e){
         
        let a = parseInt(input.peso)
        let b = parseInt(input.altura)
        let c = parseInt(input.hp)



        if(error.nombre){
            e.preventDefault()
            //alert(error.name)
            setError(validar({
                ...input,
            [e.target.name]: e.target.value
            }))}

        else if(!error.temperamentos.length || error.temperamentos.length > 3){
            e.preventDefault()
            setError(validar({
                ...input,
            [e.target.name]: e.target.value
            }))}
 
    
    }


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
          <div>
                <label>Nombre</label>
          <input type="text" value={input.name} name="nombre" onChange ={(e)=> handleChange(e)}/>
          {error.name && <span>{error.name}</span>} 
          </div>
          {/* <div>
                <label>Imagen</label>
          <input type="text" value={input.imagen} name="imagen" onChange ={(e)=> handleChange(e)}/>
          </div> */}
            <div>
                <label>Peso</label>
          <input type="text" value={input.peso} name="peso" onChange ={(e)=> handleChange(e)}/>
            </div>
            <div>
                <label>Altura</label>
            <input type="text" value={input.altura} name="altura" onChange ={(e)=> handleChange(e)}/>
            </div>
            <div>
                <label>HP</label>
            <input type="text" value={input.hp} name="hp" onChange ={(e)=> handleChange(e)}/>
            </div>
            <div>
                <label>Temperamentos</label>
            <select  name="temperamentos" onChange={(e)=> handleSelect(e)} >
                {temperament.map(e => (
                    <option key={e.id} value={e.nombre}>{e.nombre}</option>
                ))}
            </select>
            {error.temperament && <span>{error.temperament}</span>}
            {error.maximo && <span>{error.maximo}</span>}
            </div>
            <button type="submit" >Crear</button>
      </form>

    </div>
  )
}
