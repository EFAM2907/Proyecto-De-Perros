const axios = require('axios');
const {Dog, Temperament} = require('../db');
const {API, API_KEY} = process.env;


const getApiDogs = async () => {
      try{
          const api = await axios.get(`${API}?key=${API_KEY}`);
          const infoApi = api.data.map(e =>{
              //console.log(typeof e.temperament)
              
             let temperaments = []
             
             
            if(e.temperament != undefined) {
                
                temperaments = e.temperament
                
                
            }
            
            
              return{
                    id: e.id,
                    nombre: e.name,
                    altura: e.height.metric,
                    altura_max:
                    e.height.metric.split(" - ")[1] && e.height.metric.split(" - ")[1],
                  altura_min:
                    e.height.metric.split(" - ")[0] && e.height.metric.split(" - ")[0],
                  peso_max:
                    e.weight.metric.split(" - ")[1] && e.weight.metric.split(" - ")[1],
                  peso_min:
                    e.weight.metric.split(" - ")[0] !== "NaN"
                      ? e.weight.metric.split(" - ")[0]
                      : 6,
                    
                    peso: e.weight.metric,
                    // peso_max_min: e.weight.metric,
                    años_vida: e.life_span,
                    temperamentos: temperaments,
                    // temper : e.temperament,
                    imagen: e.image.url,
              }
          })
        //   console.log(infoApi);
          return infoApi;
      }
        catch(err){
            console.log(err);
}}

const getDbInfo = async () => {
    try{
        const infoDb = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['nombre']
            }]
        });
        // console.log(infoDb);
        return infoDb;
    }
    catch(err){
        console.log(err);
    }
}


const getTemperaments = async () => {
    const api = await axios.get(`${API}?key=${API_KEY}`);
    
    const infoApi = await api.data.map(e => e.temperament ? e.temperament : "sin info").map(e => e?.split(", "))
    // console.log(infoApi);
      
    // const infoApi2= await infoApi.map(e => e.join("").);
        
    const info2= infoApi.flat()
    //  console.log(info2);

        

        const info3= new Set(info2)
        // console.log(info3);
        const info4= [...info3]
        //  console.log(info4);
        const info5 = info4.map(e => {return{nombre: e}})   
         
       
   
      await Temperament.bulkCreate(info5);
    
     // console.log(crear);
        ;
        
}
        const getAllDogs = async () => {
           try{
               const infoDb = await getDbInfo();
                 const infoApi = await getApiDogs();
                   
                 return [...infoDb, ...infoApi, ];
           }
            catch(err){
                console.log(err);
        }}


    // const infoApi = api.data.temperament;

    // const guardarDb = Dog.bulkCreate(infoApi);
    // console.log(guardarDb);
    // return guardarDb;


    // const getById = async(name)=>{
      
    // }

     

module.exports = {
    getApiDogs,
    getDbInfo,
    getAllDogs,
    getTemperaments
}