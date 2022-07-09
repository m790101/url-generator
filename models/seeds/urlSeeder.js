const mongoose = require('mongoose')
const Url = require('../url') // 載入 todo model
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
    Url.create({urlOrigin:"https://www.youtube.com/",urlAfter:"https://your-project-name.herokuapp.com/123"})
  console.log('mongodb connected!')
})