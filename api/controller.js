'use strict';

var properties = require('../package.json')

var controllers = {
  home: function(req, res) {
    var home = {
      about: "http://" + req.hostname + "/about",
      sum: "http://" + req.hostname + "/operations/:apikey/sum/:num1/:num2",
      sum: "http://" + req.hostname + "/operations/:apikey/sum/:num1/:num2",
      subtract: "http://" + req.hostname + "/operations/:apikey/subtract/:num1/:num2",
      multiply: "http://" + req.hostname + "/operations/:apikey/multiply/:num1/:num2",
      divide: "http://" + req.hostname + "/operations/:apikey/divide/:num1/:num2",
      sum_example: "http://" + req.hostname + "/operations/8IrQofhWDbuiaoF8Gs7BNKpz7YXSKB0dQzYoTZ7IV3iIHKUjF4q52RVC47I5SXRX/sum/5678/1234",
      subtract_example: "http://" + req.hostname + "/operations/8IrQofhWDbuiaoF8Gs7BNKpz7YXSKB0dQzYoTZ7IV3iIHKUjF4q52RVC47I5SXRX/subtract/5678/1234",
      multiply_example: "http://" + req.hostname + "/operations/8IrQofhWDbuiaoF8Gs7BNKpz7YXSKB0dQzYoTZ7IV3iIHKUjF4q52RVC47I5SXRX/multiply/5678/1234",
      divide_example: "http://" + req.hostname + "/operations/8IrQofhWDbuiaoF8Gs7BNKpz7YXSKB0dQzYoTZ7IV3iIHKUjF4q52RVC47I5SXRX/divide/5678/1234"
    }
    res.json(home);
  },
  about: function(req, res) {
    var aboutInfo = {
      name: properties.name,
      version: properties.version
    }
    res.json(aboutInfo);
  },
  sum: function(req, res) {
    var result = { result : parseFloat(req.params.num1) + parseFloat(req.params.num2) };
    res.status(200).json(result);
  },
  subtract: function(req, res) {
    var result = { result : parseFloat(req.params.num1) - parseFloat(req.params.num2) };
    res.status(200).json(result);
  },
  multiply: function(req, res) {
    var result = { result : parseFloat(req.params.num1) * parseFloat(req.params.num2) };
    res.status(200).json(result);
  },
  divide: function(req, res) {
    var result = { result : parseFloat(req.params.num1) / parseFloat(req.params.num2) };
    res.status(200).json(result);
  }
};

module.exports = controllers;