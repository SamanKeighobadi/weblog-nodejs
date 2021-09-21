const path = require('path');

const express = require('express');
const { Statics } = require('./utils/statics');
const dotEnv = require('dotenv');
const indexRoute = require('./routes/index');

//* Config
dotEnv.config({path:'/config/config.env'})

const app = express();

//* 
app.use(express.urlencoded({extended:false}))

//? View Engine
app.set('view engine','ejs')
app.set('views',"views")

//? Staticst
Statics(app)

//? Routes
app.use(indexRoute)

const PORT = process.env.PORT || 3000; 

app.listen( PORT,() =>console.log(`Server run in ${process.env.NODE_ENV} mode port ${ PORT}`))