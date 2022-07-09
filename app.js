const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")
const app = express()


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on("error",() => {
    console.log("mongodb error")
})

db.once("open", () => {
    console.log('mongodb connected!')
})



app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.use(express,)



app.get("/",(req,res) => {
    res.render("index")
})

app.listen(3000,() => {
    console.log("app.running on http://localhost:3000")
})