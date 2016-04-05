var models = require('../models');

exports.send = function(req, res){

	if(req.body.email == "" || req.body.content == ""){

		console.log("email and content are required fields");
	}

	else{

		var d = new Date();

		var newMessage = new models.Message({
			email: req.body.email,
			content: req.body.content,
			created: d
		});

		newMessage.save(function(err, data){
			if(err) console.log(err);
			else console.log("Saved " + data);
		});
	}

	res.redirect('/');

}