const {Router} = require('express');
const router = Router();
const { getAllDogs} = require('../../src/routes/infos');
const {Dog,Temperament} = require('../db');

router.get('/', async(req, res) => {
    const {name} = req.query
    const infoDogs = await getAllDogs();
    try{
        if(name){
            const info = infoDogs.filter(e => e.nombre.toLowerCase().includes(name.toString().toLowerCase()));
          
           info.length > 0 ? res.json(info) : res.json('🐱‍👤No se encontro el Nombre de tu perro🐶');
         

        }
        else{
            res.json(infoDogs);
        }
    } catch (error) {
        console.log('entro en el catch');
    }
})

//tarea pendiente: hacer la busqueda id,con el enpoint dado!

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const infoDogs = await getAllDogs();
    // const incluir = await Temperament.findAll();
    try{
        if(id){

            // const info = infoDogs.findByPk(id);
        const info =  infoDogs.filter(e => e.id == id)
         
        info.length > 0 ? res.json(info) : res.send('😌intenta con otro rey,tu puedes🐶');
     
    }}
    catch(err){
        console.log(err);
}})


router.post('/', async(req, res)=>{
    const {nombre, altura, peso, años_vida, temperament, imagen} = req.body;

    const newDog = {nombre, altura, peso, años_vida, imagen};
    try{
        const info = await Dog.create(newDog);
        res.json(info);


        
    }    catch(err){
        console.log(err);
    }    
}    
)





        
    //     let temperamentDb = await Temperament.findAll({
    //         where: {
    //             nombre: temperament},
    //       });
    //       console.log(temperamentDb);
    //       await newDog.addTemperaments(temperamentDb);











// router.get('/', (req, res) => {
//     const temp = getTemperaments();
//      console.log(temp)
//     res.json(temp);
// })



module.exports = router;