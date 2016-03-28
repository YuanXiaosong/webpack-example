module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		    {
		    	test: /\.(jpg|png)$/,
		    	exclude: /node_modules/,
		    	loader: 'url-loader?limit = 8192'
		    }
		]
	}
};