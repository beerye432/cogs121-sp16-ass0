var models = require('../models');

exports.view = function(req, res) {

	var dataInner = [];

	models.Message.find({}, function(err, data){

		if(err){ console.log("There was an error posting your message :("); }

		else{

			for(var i = 0; i < data.length; i++){

				//console.log("finding");

				var dataM = {email: data[i].email, content: data[i].content, created: data[i].created};

				dataInner[i] = dataM;
			}

			//console.log(dataInner);

			var outer = {data: dataInner};
		}

	   	res.render("index", outer);
	});	
}

//{data: [{...}, {...}]} for purposes of using handlebars