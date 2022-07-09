const mongoose = require('mongoose')
const Url = require('../url') // 載入 todo model
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
    Url.create()
  console.log('mongodb connected!')
})