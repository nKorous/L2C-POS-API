let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')


let app = express()
//App.use
app.use(cors())
app.use(bodyParser.json())

//localVar
let PORT = process.env.PORT || 9000

//data
let items = require('./data/items.json')

//app listens on 9000
app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
})

app.get('/items', async (req, res) => {
    res.status(200).send(items)
})




