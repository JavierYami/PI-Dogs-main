const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { createDog } = require('./controllers')

const { getAllDogs } = require('./controllers')

const { findDog } = require('./controllers')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', async (req, res)=>{
    try {
        const allDogs = await getAllDogs()
        res.status(201).json(allDogs);       
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/dogs/:idRaza', async (req, res)=>{
    try {
        const { idRaza } = req.params;
        const dog = await findDog(idRaza);
        console.log(req.params)
        res.status(201).json(dog);  
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/dogs', async (req, res) =>{
    try {
        const { name, image, height, weight, lifeSpan } = req.body;
        const newDog = await createDog(name, image, height, weight,lifeSpan);
        res.status(201).json(newDog);        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/temperaments', (req, res)=>{
    res.status(200).send('Hola')
})





module.exports = router;
