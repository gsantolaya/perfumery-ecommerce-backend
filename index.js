const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8010
const cors = require('cors');
const { initDBConnection } = require('./database/dbConnection');
const userRoutes  = require('./routes/users.routes');
//const productRoutes  = require('./routes/products.routes');


app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send({ mensaje: "Hola humano" })
})

app.use("/api/users", userRoutes)
//app.use("/api/products", productRoutes)

app.listen(PORT, ()=>{
    initDBConnection();
    console.log(`Escuchando en puerto ${PORT}`)
})