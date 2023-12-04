const User = require('../models/userModel')
const bcrypt = require('bcrypt')


const createUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.role = 'user'
    user.password = hashedPassword
    const newUser = new User(user)
    return await newUser.save()
}

 const getUserByEmail = async(email) => {
    //return await User.find({"email": email})
    return await User.findOne({ "email": email })

}

/* const getUserByEmail = async () => {
    return await User.find({})

} */

const verifyExistUser = async () => {

}

module.exports = { getUserByEmail, verifyExistUser, createUser}