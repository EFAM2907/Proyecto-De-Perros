const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const routerDogs = require('./dogs');
const routerTemperaments = require('./Temperament');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', routerDogs);
router.use('/temperaments', routerTemperaments);


module.exports = router;
