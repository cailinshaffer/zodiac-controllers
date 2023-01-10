// require packages
const express = require('express')
//app config
const app = express()
const PORT = 5280
app.set('view engine', 'ejs')

// controllers
app.use('/air', require('./controllers/allAirSigns'))
app.use('/water', require('./controllers/allWaterSigns'))
app.use('/fire', require('./controllers/allFireSigns'))
app.use('/earth', require('./controllers/allEarthSigns'))

// elements traits
const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ["movement", "vcreativity", "action"]
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'pyshic']
    },
    fire: {
        signs: ['aries', 'leo', 'sagittarius'],
        traits: ['passionate', 'strong emtions', 'tempermental']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical']
    }
}
//GET ROUTE FOR HOME PAGE
app.get("/", function(req, res) {
    // res.send("home ")
    res.render("index.ejs")
})

//MIDDLE WEARS
app.use(express.static("public"))


//listen on a port
app.listen(PORT, () =>{
    console.log(`listen linda on PORT ${PORT}`)
})
// //routes

// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })

// app.get('/air', (req, res) => {
//     res.render('airSigns.ejs', {

//         airSigns: ['aquarius', 'gemini', 'libra'],
//         airTraits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
//     })
// })



// app.get('/water', (req, res) => {
//     res.render('waterSigns.ejs', {
//         signs: ['pisces', 'cancer', 'scorpio'],
//         //traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
//     })
// })



// app.get('/fire', (req, res) => {
//     res.render('fireSigns.ejs', {
//         signs: ['aries', 'leo', 'sagittarius'],
//        // traits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
//     })
// })



// app.get('/earth', (req, res) => {
//     res.render('earthSigns.ejs', {
//         signs: ['tarus', 'leo', 'capricorn'],
//        // traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
//     })
// })