const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const productRouter = require('./routers/productRouter')

dotenv.config()

const mongoose = require('./config/dbConfig')

const app = express()

const PORT = process.env.PORT || 8080


app.use(express.static(path.join(__dirname + '/public')))

app.listen(PORT, () => {
    console.log(`El servidor se está escuchando en http://localhost:${PORT}/`)
})