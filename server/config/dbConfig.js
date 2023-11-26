/* conexión con MongoDB */
const mongoose = require('mongoose')
const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'altatienda', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('conexión exitosa')
})
.catch((err) => {
    console.error(err)
})

module.exports = mongoose