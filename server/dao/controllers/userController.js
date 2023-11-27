const User = require('../models/userModel')
const bcrypt = require('bcrypt')


const createUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.role = 'user'
    user.password = hashedPassword
    const newUser = new User(user)
    return await newUser.save()
}

const getUser = async() => {

}

const verifyExistUser = async () => {

}

module.exports = {getUser, verifyExistUser, createUser}