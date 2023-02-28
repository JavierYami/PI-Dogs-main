const { Dogs } = require('../db')

const createDog = async (name, image, height, weight, lifeSpan) => {
    const newDog = await Dogs.create({name, image, height, weight, lifeSpan});
    return newDog;
}

module.exports = { createDog }