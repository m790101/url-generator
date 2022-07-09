const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")
const app = express()
const Urls = require("./models/url")
const randomGenerator = require("./randomUrl")



const db = mongoose.connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })



db.on("error",() => {
    console.log("mongodb error")
})

db.once("open", () => {
    console.log('mongodb connected!')
})


app.use(express.static("public"))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }))




app.get("/",(req,res) => {
    res.render("index")
})

app.post("/", (req,res) => {
    const randomUrl = randomGenerator()
    const urlOrigin = req.body.url

        Urls.find({'urlOrigin': urlOrigin})
        .lean().then((item)=> {
            if(item.length){
                res.render("index",{randomUrl: item[0].urlAfter})
            }
            else{ 
                Urls.create({
                urlOrigin: urlOrigin,
                urlAfter: randomUrl
            })
            .then(res.render("index",{randomUrl}))
            .catch(error => console.log(error))}
        })

})





app.get("/:shortURL",(req,res) => {
    const shortURL = req.params.shortURL

    Urls.find({ 'urlAfter': shortURL })
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