const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************



const controller = {
	root: (req, res) => {
		res.render('index')
	},
	red: (req,res) => {
		res.render('redes')
	},
	
	
	
}

module.exports = controller