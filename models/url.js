const mongoose = require("mongoose")
const Schema = mongoose.Schema
const urlSchema = new Schema({
    urlOrigin:{type:"String", require: true},
    urlAfter:{type:"String", require: true}
})

module.exports = mongoose.model("Url",urlSchema)