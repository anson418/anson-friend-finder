// API Routes
// =============================================================

// Use fs to read/write friend data (JSON objects) to/from friends.js
const fs = require('fs');

module.exports = function(app, path) {


	app.get('/api/friends', function(req, res) {
		fs.readFile("app/data/friends.js", "utf8", function(err, data) {
			if (err) throw err;
			res.json(JSON.parse(data));
			}
		});
	});

	app.post('/api/friends', function(req, res) {

		fs.readFile('app/data/friends.js', function (err, data) {
			// Read existing friends to array
		    var friends = JSON.parse(data);

		    var bestMatch = req.body;
		    var bestScore = 999;
			
		    // Loop through the friends to find the best match
		    for (var f in friends) {
		    	var currentScore = 0;
		    	for (var i = 0; j < f['answers[]'].length; j++) {
		    		distance += Math.abs((parseInt(req.body['answers[]'][i]) - parseInt(f['answers[]'][i])));
				}

				if(currentScore <= bestScore) {
					bestScore = currentScore;
					bestMatch = f;
		    	}
		    }
/*			
		    // Add the new person to the friends array
		    friends.push(req.body);

		    // Write to file
		    fs.writeFile("app/data/friends.js", JSON.stringify(friends));
*/	
	
			// Return results
			res.send(bestMatch);

		});
	});
}
