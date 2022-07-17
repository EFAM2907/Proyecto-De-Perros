import axios from 'axios';


import {
    ADD_DOG,
    ADD_DETAIL,
 ADD_DOG_BY_NAME,
 ADD_TEMPERAMENT,
 CREATE_DOGS,
 ORDER_BY_NAME,
    FILTRAR_TEMPERAMENT,
    FILTRAR_PESO,
    POST_DOG,
    FILTRAR_RAZA,
    TRAER_RAZAS,
    RE_DETAIL,
    DELETE

 
} from './nombreActiones';

 export function getAllDog() {
     return (dispatch) => {
         const res = axios.get('http://localhost:3001/dogs');
            res.then(response => {
                dispatch({type: ADD_DOG,  payload: response.data })})
     
        }
 }

export function getDetail(id){
    return async(dispatch) => {
        const res = await axios.get(`http://localhost:3001/dogs/${id}`);
            dispatch({type:ADD_DETAIL, payload: res.data})
    }}


export function BuscarPorName(name){
    return async(dispatch) => {
        const res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            dispatch({type: ADD_DOG_BY_NAME, payload: res.data})
    }
}

export function AllTemperament(){
    return async(dispatch) => {
        const res = await axios.get(`http://localhost:3001/temperaments`);
            dispatch({type: ADD_TEMPERAMENT, payload: res.data})
    }}

    export function PostCreateDogs(infoDelForm){
        return async(dispatch) => {
            const res = await axios.post(`http://localhost:3001/dogs`, infoDelForm);
                dispatch({type: CREATE_DOGS, payload: res.data})
        }
    }

 

    export function ordenarPorNombre(payload){
        return{
            type: ORDER_BY_NAME,
            payload
        }
    }

    export function filtrarPorTemperamento(payload){
        return{
            type: FILTRAR_TEMPERAMENT,
            payload
        }
    }

    export function filtrarPorRaza(payload){
        return{
            type: FILTRAR_RAZA,
            payload
        }
    }

    // cambiar nombre ordenarPoraza
    export function OrdenarPorPeso(payload){
        return{
            type: FILTRAR_PESO,
            payload
        }}

    export function postDog(payload){
        return async(dispatch) => {
            const res = await axios.post('http://localhost:3001/dogs', payload);
                dispatch({type: POST_DOG, payload: res.data})
        }}


        export function traerRazas(){
            return async(dispatch) => {
            const res = await axios.get('http://localhost:3001/dogs')
            const razas = res.data.map(dog => {return{nombre: dog.nombre}})
           dispatch({type: TRAER_RAZAS, payload: razas })

            }
        }


        export function removerDetalle(){
            return{
                type:RE_DETAIL,
                
            }
        }

        export function deleteDog(id){
            return async(dispatch) => {
                const res = await axios.delete(`http://localhost:3001/dogs/${id}`);
                dispatch({type: DELETE, payload: res.data})}
            }