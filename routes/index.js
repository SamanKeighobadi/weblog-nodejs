const express = require('express');

const router = express.Router();


router.get("/",(req,res) => {
    res.render('index',{
        title:'Weblog',
        path:'/'
    })
});

router.get('/dash',(req,res) => {
    res.render('dash',{
        title:'dahsboard',
        layout:'./layouts/dashLayout'
    })
})


module.exports = router;