const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function (err, list) {
	if(err)
		console.error(err);
	else
	{
		list.forEach(function (element){
			if(path.extname(element) === ("."+process.argv[3]))
				console.log(element);
		});
	}
});

