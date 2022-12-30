const express = require("express")
const postRoute = require('./routes/post')

const app = express()
const port = 5000;

app.use('/post', postRoute)



app.listen(port, () => {
    console.log(`Server started on Port ${port}`)
})