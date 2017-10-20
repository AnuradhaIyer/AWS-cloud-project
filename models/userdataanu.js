var mongoose = require('mongoose');

//UserData Schema
var userdataSchema = mongoose.Schema({
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	emailid:{
		type: String,
		required: true

	},
	create_date:{
		type: Date,
		default: Date.now
	}
},
	{
		collection:'anu'

})

var UserData = module.exports = mongoose.model('anu', userdataSchema);

//Get UserData
module.exports.getUserDatas = function(callback, limit){
	UserData.find(callback).limit(limit);
} 

//ADD userdata
module.exports.addUserData = function(userdata, callback){
	UserData.create(userdata, callback);
} 