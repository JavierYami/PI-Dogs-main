const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', (req, res)=>{
    res.status(200).send('Hola')
})

router.get('/dogs/:idRaza', (req, res)=>{
    res.status(200).send('Hola')
})

router.post('/dogs', (req, res) =>{
    res.status(200).send('Hola')
})

router.get('/temperaments', (req, res)=>{
    res.status(200).send('Hola')
})





module.exports = router;
