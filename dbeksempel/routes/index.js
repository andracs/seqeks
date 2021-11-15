const { Sequelize, Model, DataTypes } = require("sequelize");
const models = require('../models');

var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  // Gem en bruger i database


  // Indlæse en bruger fra database

  
  res.render('index', { title: 'Express' });
});


module.exports = router;
