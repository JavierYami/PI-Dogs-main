const { Dogs } = require('../db')

const createDog = async (name, image, height, weight, lifeSpan) => {
    const newDog = await Dogs.create({name, image, height, weight, lifeSpan});
    return newDog;
}

const getAllDogs = async () => {
    const allDogs = Dogs.findAll()
    return allDogs;
}

const findDog = async (idRaza) => {
    const dog = await Dogs.findOne(({ where: { id : idRaza } }))
    return dog;
}

module.exports = { createDog, getAllDogs, findDog}