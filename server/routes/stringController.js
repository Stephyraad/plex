var express = require('express');
var mongoose = require('mongoose');
var fakeData = require('../datagenerator');

var stringSchema = mongoose.Schema({
	arrayString: [ { type: String } ]
});

var stringModel = mongoose.model('strings', stringSchema);
console.log("in string cont " , fakeData.strings.length)
//----------- To populate DB ------------
exports.postStrings = function(req, res) {
	var newString = new stringModel();
	newString.arrayString = fakeData.strings;
	console.log("Strings: ", fakeData.strings.length);
	newString.save(function(err, data) {
		if(err) {
			res.status(500).send();
		} else {
			res.send(data);
		}
	});
};


//------- To fetch data from DB ---------
exports.getStrings = function() {
	stringModel.find({}, function(err, foundData) {
		console.log("FOUNDDATA: ", JSON.stringify(foundData[0].arrayString.length));
	})
}