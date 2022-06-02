import { 
    ADD_DOG,
    ADD_DETAIL,
    ADD_TEMPERAMENT,
    CREATE_DOGS,
    ADD_DOG_BY_NAME,
    ORDER_BY_NAME,
    ASC,
    DESC,
    FILTRAR_TEMPERAMENT
} from './nombreActiones'


const initialState={ 
     perros:[],
        detailDogs:[],
        temperament:[],
        
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_DOG:{
            return {
                ...state,
                perros: action.payload,
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
            perros: action.payload,
    }}
    case ORDER_BY_NAME:{
        let ordenamiento = action.payload === ASC ? state.perros.sort((a,b) =>  { 
            if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    }) : state.perros.sort(function(a,b){
        if(a.name > b.name){
            return -1
        }
        if(a.name < b.name){
            return 1
        }
        return 0
    })
    
        return{
            ...state,
            perros: ordenamiento,
        }}
    case FILTRAR_TEMPERAMENT:{
        // let dogs = state.perros
        // let filtro = action.payload === ""? dogs : dogs.filter(dog =>  {
        //     return  dog.temperament.includes(action.payload)})
        //     console.log(filtro)
        
        let dogs = state.perros
        let filtro = action.payload === ""? dogs : dogs.filter(dog =>  {
            return  dog.temperamentos.includes(action.payload)})
            console.log(filtro)
            return{
                ...state,
                perros: filtro,
        }
    }
    
        
    case ASC:{
        return {
          ...state,
          perros: state.perros.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      }}


      case DESC:{
       return{
          ...state,
          perros: state.perros.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
       }}


    default:{
        return state;
    }
}}






export default rootReducer;