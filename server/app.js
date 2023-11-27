/* Imports  */
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const productRouter = require('./routers/productRouter')
const sessionRouter = require('./routers/sessionRouter')

/* Configs */
dotenv.config()
const mongoose = require('./config/dbConfig')
const app = express()
const PORT = process.env.PORT || 8080

/* Middlewares */
app.use(express.static(path.join(__dirname + '/public')))

// DPS borrar línea urlencoded xq voy a usar todo x JSON
app.use(express.urlencoded({extendend: true}))
app.use(express.json())


/* Routers */
app.use('/api/products', productRouter)
app.use('/session', sessionRouter)


app.listen(PORT, () => {
    console.log(`El servidor se está escuchando en http://localhost:${PORT}/`)
})