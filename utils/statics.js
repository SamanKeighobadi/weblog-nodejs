const path = require('path');

const express = require('express');

exports.Statics = (app) => {
    app.use(express.static(path.join(__dirname,'..','node_modules','bootstrap-v4-rtl','dist')));
    app.use(express.static(path.join(__dirname,'..','node_modules','fontawesome')))
    app.use(express.static(path.join(__dirname,'..','node_modules','public')))
    
}
