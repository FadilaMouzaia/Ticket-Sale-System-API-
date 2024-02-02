require('dotenv').config()
const express = require('express')
const database = require("./config/db")
const errMiddleware = require("./middelware/errormiddleware.js")

database()



const port=process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))



app.use("/api/tickets",require('./routes/tickets'))
app.use("/api/clients",require('./routes/clients'))
app.use("/api/buy",require('./routes/buy'))


app.use(errMiddleware)

app.listen(port,()=>console.log(`server start in ${port}`))