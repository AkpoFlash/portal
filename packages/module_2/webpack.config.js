const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		hot: true,
		port: 3002,
		historyApiFallback: {
			index: '/index.html',
		},
		inline: true,
		publicPath: '/dist/',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods':
				'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization',
		},
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader',
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				options: {
					modules: {
						mode: 'local',
						exportGlobals: true,
						localIdentName: 'module2-[local]--[hash:base64:5]',
						context: path.resolve(__dirname, 'src'),
						hashPrefix: 'my-custom-hash',
					},
				},
			},
			{
				test: /\.svg|eot|ttf|woff|woff2|ico|png|gif|jpg($|\?)/,
				loader: 'file-loader',
				options: {
					useRelativePath: false,
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json'],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed),
		}),
	],
	devtool: 'none',
};
