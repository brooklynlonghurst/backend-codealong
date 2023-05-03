//!BOILERPLATE FOR SERVER
//*Import statements at the top, Global Variables/ Node
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const app = express() //can also be called server 

//*Middleware (Defines HOW the server runs)/ Express
app.use(express.json())
app.use(cors())

//*Endpoints (axios calls and HTTP requests)/ Express
app.get('/api/info', async(req, res) => {
    console.log('this is an express request')
})

//*Listen
app.listen(PORT, () => console.log(`____Up on port ${PORT}____`))