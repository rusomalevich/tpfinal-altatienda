const express = require('express')
const { createUser, getUserByEmail } = require('../dao/controllers/userController')
const sessionRouter = express.Router()

sessionRouter.post('/', async (req, res) => {
    const {name, email, password} = req.body
    const newUser = await createUser({name, email, password})
    if(newUser){
        res.status(200).json({ok:true, content:'Usuario creado con éxito'})
    }
})

sessionRouter.get('/', async (req, res) => {
    const {email} = req.body
    console.log(email)
    //res.json({ ok: true, users: await getUserByEmail(email) })
    let user = await getUserByEmail(email)
    if (user) {
        res.status(200).json({ok:true, user})
    } else {
        res.status(404).json({ ok: false, error: 'usuario no encontrado' })
    }

})


module.exports = sessionRouter