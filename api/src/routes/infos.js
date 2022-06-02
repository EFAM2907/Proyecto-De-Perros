const axios = require('axios');
const {Dog, Temperament} = require('../db');
const {API, API_KEY} = process.env;


const getApiDogs = async () => {
      try{
          const api = await axios.get(`${API}?key=${API_KEY}`);
          const infoApi = api.data.map(e =>{
              return{
                    id: e.id,
                    nombre: e.name,
                    altura: e.height,
                    // altura_max_min: e.height.metric,
                    peso: e.weight,
                    // peso_max_min: e.weight.metric,
                    años_vida: e.life_span,
                    temperamentos: e.temperament,
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
      
    // const infoApi2= await infoApi.map(e => e.join("").);
        
    const info2= infoApi.flat()

        

        const info3= new Set(info2)
        const info4= [...info3]
        const info5 = info4.map(e => {return{nombre: e}})   
     
    // console.log(info5)
   
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



module.exports = {
    getApiDogs,
    getDbInfo,
    getAllDogs,
    getTemperaments
}