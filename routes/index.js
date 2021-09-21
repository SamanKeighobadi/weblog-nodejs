const express = require('express');

const router = express.Router();


router.get("/",(req,res) => {
    res.render('index',{
        title:'Weblog',
        path:'/'
    })
});




module.exports = router;