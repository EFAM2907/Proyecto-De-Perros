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
          
           info.length > 0 ? res.json(info) : res.json(['No se encontro el Nombre de tu perro🐶']);
         

        }
        else{
            res.json(infoDogs);
        }
    } catch (error) {
        console.log('entro en el catch');
    }
})



router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const infoDogs = await getAllDogs();
    // const incluir = await Temperament.findAll();
    try{
        if(id){

       
        const info =  infoDogs.filter(e => e.id == id)
       
         
        info.length > 0 ? res.json(info) : res.send('😌intenta con otro rey,tu puedes🐶');
     
    }}
    catch(err){
        console.log(err);
}})


router.post('/', async(req, res)=>{
    const {nombre,altura, altura_min,altura_max, peso,peso_max,peso_min, años_vida, temperamentos, imagen} = req.body;

    const newDog = {nombre, altura,altura_min,altura_max,peso,peso_max,peso_min, años_vida, imagen};
    try{
        const info = await Dog.create(newDog);
        
        
        for (let i = 0; i < temperamentos.length; i++) {
            let tem = await Temperament.findOne({
                where: {
                    nombre: temperamentos[i]
                }
            })
            info.addTemperaments(tem)
        }
        
        res.json(info);
        
    }    catch(err){
        console.log(err);
    }    
}    
)


router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try{
        if(id.includes('-')){
        const info = await Dog.destroy({
            where:{
                id: id,
            }
        })
                 

        res.json(info, console.log(info))
   
    }
        else{
            res.send('solo se eliminaran los creados')}
    }
    catch(err){
        console.log(err);
    }
})



        
   













module.exports = router;