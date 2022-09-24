const express = require("express")

const app = express()
const port =  process.env.PORT || 3000;
const db = process.env.DB || 'Nothing'
app.use(express.static("public"))

app.listen(port, () =>{
    console.log("DB: "+db)
    console.log("PM2 Project is now live @ localhost:"+port)
})