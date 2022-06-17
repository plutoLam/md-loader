const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "./index.js")
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "./dist")
	},
	module: {
		rules: [
			{
				test: /\.md$/,
				use: path.resolve(__dirname, "../md-loader.js")
			}
		]
	}
};