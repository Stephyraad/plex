var express = require('express'); 
var mongoose = require('mongoose');
var fakeData = require('../datagenerator');

var integerSchema = mongoose.Schema({
  array: [ { type: Number } ]
});

var integerModel = mongoose.model('integers', integerSchema);

// ----------- To populate DB ------------
exports.postIntegers = function(req, res) {
  var newInteger = new integerModel();
  newInteger.array = fakeData.integer;
  console.log("Integers:" + integer.length);
  newInteger.save(function(err, data) {
    if (err) {
      res.status(500).send();
    } else {
      console.log("Data: " + data);
      res.send(data);
    }
  });
};

//-------- To fetch data from DB ------ 
exports.getIntegers = function() {
  return integerModel.find({}, function(err, foundData) {
  });
}; 

// ---- To Drop Collection in DB -----
// integerModel.remove({}, function(){
//  console.log("db dropped");
// })
