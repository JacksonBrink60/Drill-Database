const express = require("express")
const app = express()
const PORT = 3000
const fs = require("fs")
let data = JSON.parse(fs.readFileSync("public/links.json"))
app.use(express.json())
app.use(express.static("public"))

app.get("/api", (req, res)=>{
    res.send(data)
})

app.listen(PORT, ()=>{})