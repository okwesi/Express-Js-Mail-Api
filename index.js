const express = require("express")
const route = require('./src/router')

const app = express()
const port = 5000;

app.use(express.json());

app.use('/', route)



app.listen(port, () => {
    console.log(`Server started on Port ${port}`)
})