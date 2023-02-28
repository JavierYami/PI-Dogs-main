const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { createDog } = require('./controllers')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', (req, res)=>{
    res.status(200).send('Hola')
})

router.get('/dogs/:idRaza', (req, res)=>{
    res.status(200).send('Hola')
})

router.post('/dogs', async (req, res) =>{
    try {
        const { name, image, height, weight, lifeSpan } = req.body;
        const newDog = await createDog(name, image, height, weight, lifeSpan);
        res.status(201).json(newDog);        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/temperaments', (req, res)=>{
    res.status(200).send('Hola')
})





module.exports = router;
