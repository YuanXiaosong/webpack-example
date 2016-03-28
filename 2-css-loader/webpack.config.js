module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		    {
		    	test: /\.css$/,
		    	exclude: /node_modules/,
		    	loader: 'style-loader!css-loader'
		    },
		]
	}
};