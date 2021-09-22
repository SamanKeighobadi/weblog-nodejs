const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const morgan = require('morgan');

const Database = require('./config/db');
const { Statics } = require('./utils/statics');

const userRoutes = require('./routes/users');
const dashboardRoutes = require('./routes/dashboard');
const indexRoute = require('./routes/index');

//* Config
dotEnv.config()

//* Connect to databse 
Database()

const app = express();

//* 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(express.urlencoded({extended:false}))

//? View Engine
app.use(expressLayout)
app.set('view engine','ejs')
app.set('layout','./layouts/mainLayout')
app.set('views',"views")

//? Staticst
Statics(app)

//? Routes
app.use(indexRoute)
app.use('/dashboard',dashboardRoutes)
app.use('/users',userRoutes)

const PORT = 3000; 

app.listen( PORT,() =>console.log(`Server run in ${process.env.NODE_ENV} mode port ${ PORT}`))