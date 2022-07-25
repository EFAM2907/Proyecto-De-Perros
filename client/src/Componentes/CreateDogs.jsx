import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AllTemperament } from '../redux/action'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import s from '../styles/Create.module.css'
import {postDog} from '../redux/action'
import Swal from 'sweetalert2'
import{useHistory} from 'react-router-dom'
import {Formik, Field, Form} from 'formik'

export default function CreateDogs(){

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(AllTemperament())
    },[dispatch])

    const Temper = useSelector(state => state.temperament)
    console.log('estos son  los', Temper)

    const[input, setInput] = useState({
        temperament:[]
    })

    function handleSelect(e) {
        setInput({
            temperament: [...input.temperament, e.target.value]
        })
    }


    return(
   
    <Formik
     
    initialValues={
       { nombre: "",
        peso_max: "",
        peso_min: "",
        peso: "",
        imagen: "",
        altura_min: "",
        altura_max: "",
        altura: "",
        años_vida: "",
     }
    }
    >
       
       

   
        {(props) => ( 
        <Form>
       <div className={s.container}>

         <div>
          <Field
          type="text"
          name="nombre" 
          placeholder="Nombre"/>
         </div>

        <div>
         <Field 
         type="text"
         name="imagen" 
         placeholder="imagen"/>
        </div>

        <div>
         <Field 
         type="text"
         name="peso_max" 
         placeholder="peso maximo"/>

         <Field 
         type="text"
         name="peso_min" 
         placeholder="peso minimo"/>
        </div>

       <div>
         <Field 
         type="text"
         name="altura_max" 
         placeholder="altura maxima"/>
        
         <Field 
         type="text"
         name="altura_min" 
         placeholder="altura minima"/>
      </div>

       <div>
         <Field 
         type="text"
         name="años_vida" 
         placeholder="años de vida"/>
      </div>

        <Field name='temperament' as='select' onchange={(e)=>{handleSelect(e)}}>
            {Temper.map(e => (
                     <option key={e.id} value={e.nombre}>{e.nombre}</option>)) }

                     <ul>
                        <li>
                            {input.temperament.map(e => <button type="button">{e}</button>) }
                            {console.log("soy", input.temperament)}
                        </li>
                     </ul>
                     

        </Field>

       </div>

       <button type="submit">enviar</button>
    </Form>
        )}




    </Formik>

    )
 }






























// function validar(input){

  

//     let errors = {}

      
//     if (!input.nombre || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.nombre)){
//         errors.name = 'Ingresa la Primera letra Mayuscula, Unicamente Letras y Numeros ';
//     }
 
//     if(!input.altura_min || !/^[1-9]\d*(\.\d+)?$/.test(input.altura_min)){
//         errors.altura_min = 'El valor Min tiene que ser numerico no se permite coma';
//     }
//     if(!input.altura_max || !/^[1-9]\d*(\.\d+)?$/.test(input.altura_max)){
//         errors.altura_max = 'El valor Max tiene que ser numerico no se permite coma';
//     }
//     if(input.altura_max <= input.altura_min){
//         errors.altura_min = 'Min no puede ser Mayor o Igual que Max';
//     }

     
//     if(!input.peso_min || !/^[1-9]\d*(\.\d+)?$/.test(input.peso_min)){
//         errors.peso_min = 'El valor Min tiene que ser numerico no se permite coma';
//     }
//     if(!input.peso_max || !/^[1-9]\d*(\.\d+)?$/.test(input.peso_max)){
//         errors.peso_max = 'El valor Max tiene que ser numerico no se permite coma';
//     }
//     if(input.peso_max <= input.peso_min){
//         errors.peso_min = 'Min no puede ser Mayor o Igual que Max';
//     }

    
    
    
//     if (input.imagen && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.imagen) ){
//         errors.imagen = 'Debe ser una URL o estar vacio para tomar una Imagen por Defecto';
//     }
//     if (input.temperamentos.length <= 2){
//         errors.temperamentos = 'Se requieren al menos tres(3) Temperamentos';
//     }
//     return errors
// }
   
// export default function CreateDogs() {
    
//     const dispatch = useDispatch()
//     const temperament = useSelector(state=> state.temperament)

//        const history = useHistory()

//     useEffect(() => {
//         dispatch(AllTemperament())
//     }, [dispatch])

//     const [error, setError] = useState({})
//     const [button, setButton] = useState(false);

    

//     const [input, setInput] = useState({
//         nombre: "",
//         peso_max: "",
//         peso_min: "",
//         peso: "",
//         imagen: "",
//         altura_min: "",
//         altura_max: "",
//         altura: "",
         
//         años_vida: "",
//         temperamentos: []
//     })

//     //....
//     function handleChange(e){
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })
//         setError(validar({
//             ...input,
//             [e.target.name]: e.target.value
//         }))
//     }

//     //.....
//     function handleSelect(e){
//         setInput({
//             ...input,
//             temperamentos: [...input.temperamentos, e.target.value]
//         })
//         setError(validar({
//             ...input,
//             temperamentos: [...input.temperamentos, e.target.value]
//     }))}


//     //.....
//     function handleDelete(el){
//         setInput({
//             ...input,
//             temperamentos: input.temperamentos.filter(e=> e !== el)
//         })
//     }
//     //......
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(error)
//         if( input.nombre !== "" && !error.name && !error.temperamentos && !error.altura_min && !error.altura_max && !error.imagen && !error.peso_min && !error.peso_max){
           
//             dispatch(postDog(input))
          
//             Swal.fire(
//                 'Bien Hecho',
//                 'has Creado un Perrito',
//                 'success'
//               )
//               history.push('/home')
           
//         }else{
//             setError(validar(input))
//         }
//     }


//   return (
//    <div>
//             <h1 className={s.text}>SORPRENDEME...🐕</h1>
//       <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
//           <div>
                
//           <input placeholder='Nombre' type="text" value={input.name} name="nombre" onChange ={(e)=> handleChange(e)}/>
//           {error.name && <span>{error.name}</span>} 
//           </div>
//           <div>
//                 <label>Imagen</label>
//           <input type="text" value={input.imagen} name="imagen" onChange ={(e)=> handleChange(e)}/>
//           {error.imagen && <span>{error.imagen}</span>} 

//           </div>
//             <div>
//                 <label >Peso max</label>
//           <input  className={s.input} type="text" value={input.peso_max} name="peso_max" onChange ={(e)=> handleChange(e)} />
//               {error.peso_max && <span>{error.peso_max}</span>}kg
          

//             </div>
//             <div>
//                 <label >Peso min</label>
//           <input  className={s.input} type="text" value={input.peso_min} name="peso_min" onChange ={(e)=> handleChange(e)}/>
//               {error.peso_min && <span>{error.peso_min}</span>}kg  
//             </div>
            
//             <div>
//                 <label>Altura +</label>
//             <input className={s.input} type="text" value={input.altura_max} name="altura_max" onChange ={(e)=> handleChange(e)}/>
//             {error.altura_max && <span>{error.altura_max}</span>} cm

//             </div>
//             <div>
//                 <label>Altura -</label>
//             <input className={s.input} type="text" value={input.altura_min} name="altura_min" onChange ={(e)=> handleChange(e)}/>
//             {error.altura_min && <span>{error.altura_min}</span>} cm

//             </div>
//             <div>
//                 <label>vida</label>
//             <input type="text" value={input.años_vida} name="años_vida" onChange ={(e)=> handleChange(e)}/>

//             </div>
//             <div>
//                 <label >Temperamentos</label>
//             <select  name="temperamentos" onChange={(e)=> handleSelect(e)} >
//                 {temperament.map(e => (
//                     <option key={e.id} value={e.nombre}>{e.nombre}</option>
//                 ))}
//             </select>
//             <ul className={s.ul}><li className={s.lista}>{input.temperamentos.map(el=> <button className={s.botonTemp} type='button' key={el.id} onClick={()=>handleDelete(el)}>{el}</button>)}</li></ul>

//             {error.temperamentos && <span>{error.temperamentos}</span>}
            
//             </div>
//             <div>
//             <button  type="submit" >Crear</button>
//             {button && <p>bien hecho rey</p>}
//             </div>
//       </form>

//     </div>)
// }