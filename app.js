const express = require("express")
const app = express()


app.get("/",(req,res) => {
    res.send("hiiiiiii")
})

app.listen(3000,() => {
    console.log("app.running on http://localhost:3000")
})