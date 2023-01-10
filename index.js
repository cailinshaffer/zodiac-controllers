// require packages
const express = require('express')
//app config
const app = express()
const PORT = 5280
app.set('view engine', 'ejs')

//controllers
// app.use('/air', require('./controllers/allAirSigns'))
// app.use('/water', require('./controllers/allWaterSigns'))
// app.use('/fire', require('./controllers/allFireSigns'))
// app.use('/earth', require('./controllers/allEarthSigns'))


//routes

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/air', (req, res) => {
    res.render('airSigns.ejs', {

        airSigns: ['aquarius', 'gemini', 'libra'],
        airTraits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})



app.get('/water', (req, res) => {
    res.render('waterSigns.ejs', {
        signs: ['pisces', 'cancer', 'scorpio'],
        //traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    })
})



app.get('/fire', (req, res) => {
    res.render('fireSigns.ejs', {
        signs: ['aries', 'leo', 'sagittarius'],
       // traits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    })
})



app.get('/earth', (req, res) => {
    res.render('earthSigns.ejs', {
        signs: ['tarus', 'leo', 'capricorn'],
       // traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})



app.use(express.static("public"))


//listen on a port
app.listen(PORT, () =>{
    console.log(`listen linda on PORT ${PORT}`)
})