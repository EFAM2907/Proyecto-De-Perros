const { Router } = require('express');
const router = Router();
// const { getAllDogs, getTemperaments } = require('../src/routes/infos');
const{Temperament} = require('../db')

router.get('/', async(req, res) => {
    const info = await Temperament.findAll();
    // const g = info.map(i => {return{name:i}});
    res.json(info);
})

module.exports = router;