const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")
const app = express()
const Urls = require("./models/url")
const db = mongoose.connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })



db.on("error",() => {
    console.log("mongodb error")
})

db.once("open", () => {
    console.log('mongodb connected!')
})



app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }))



app.get("/",(req,res) => {
    res.render("index")
})

app.post("/", (req,res) => {
    const urlOrigin = req.body.url
    console.log(req.body.url)
    Urls.create({
        urlOrigin:urlOrigin,
        urlAfter: "abc"
    })
    .then(res.redirect("/"))
})

app.get("/:simple",(req,res) => {
    const simple = req.params.simple
    console.log(req.params.simple)

    return Urls.find({ 'urlAfter': simple })
    .lean()
    .then((item) => {
        res.redirect(item[0].urlOrigin)
    })
    .catch(err => console.log(err))
    /*return Urls.find()
    .lean()
    .then(res.redirect(req.params.urlOrigin))
    .catch(err => console.log(err))*/
})

app.listen(3000,() => {
    console.log("app.running on http://localhost:3000")
})