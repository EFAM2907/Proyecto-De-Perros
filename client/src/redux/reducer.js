import { 
    ADD_DOG,
    ADD_DETAIL,
    ADD_TEMPERAMENT,
    CREATE_DOGS,
    ADD_DOG_BY_NAME,
    ORDER_BY_NAME,
    ASC,
    DESC,
    FILTRAR_TEMPERAMENT,
    FILTRAR_PESO,
    POST_DOG,
    FILTRAR_RAZA,
    TRAER_RAZAS,
    RE_DETAIL,
    DELETE
} from './nombreActiones'


const initialState={ 
     perros:[],
     allPerros:[],
        detailDogs:[],
        temperament:[],
        FiltroRaza:[],
        FiltroTemper:[],
   
       
      
        
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_DOG:{
            return {
                ...state,
                perros: action.payload,
                allPerros: action.payload,
                FiltroTemper: action.payload
              
       }
    }
    case ADD_DETAIL:{
        return{
            ...state,
            detailDogs: action.payload,

        }
    }
    case ADD_TEMPERAMENT:{
        return{
            ...state,
            temperament: action.payload,
    }}
    case CREATE_DOGS:{
        return{
            ...state,
        }
    }
    case ADD_DOG_BY_NAME:{
        return{
            ...state,
            allPerros: action.payload,
    }}
    case ORDER_BY_NAME:{
        console.log(action.payload === DESC) 
        let ordenamiento = action.payload === "ASC" ?
         state.perros.sort((a,b) =>  { 
            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
               
            return 1
        }
        if(a.nombre.toLowerCase()< b.nombre.toLowerCase()){
            return -1
        }
        return 0
    })
     : state.perros.sort(function(a,b){
        if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
        
            return -1
        }
        if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
            return 1
        }
        return 0
    })

   
    
        return{
            ...state,
            perros: ordenamiento,
        }}
    case FILTRAR_TEMPERAMENT:{
        let allPerros = state.FiltroTemper
        let filtro = action.payload === ""? allPerros : allPerros.filter(dog =>  {
            return  dog.temperamentos?.includes(action.payload)})
            return{
                ...state,
                allPerros: filtro,
        }
    }
   case TRAER_RAZAS:{
         
        return{
            ...state,
            FiltroRaza: action.payload        
            ,}}

    case FILTRAR_RAZA:{
        
        let allPerros = state.perros
        let filtroR = action.payload === ""? allPerros : allPerros.filter(dog =>  {
            //console.log(dog.nombre)
            return dog.nombre?.includes(action.payload)})
         
            return{
                ...state,
                allPerros: filtroR,}}


    
    case FILTRAR_PESO:{
        let perros = state.perros
        let filtroP = action.payload === "pesoASC"?  perros.sort((a, b)=>{
            return a.peso_min - b.peso_min
        }) : perros.sort((a, b)=>{
            return b.peso_max - a.peso_max

        })
            return{
                ...state,
                perros: filtroP,
            }
        
    }
    case POST_DOG:{
        return{
            ...state,
    }}

    case RE_DETAIL:{
        return{
            ...state,
            detailDogs: ''
        }}
        case DELETE:{
            return{
                ...state,
                detailDogs: []
        }}

  

     default:{
        return state;
    }
}}






export default rootReducer;