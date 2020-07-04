const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	target: 'web',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/@components'),
			'@hooks': path.resolve(__dirname, 'src/@hooks'),
			'@pages': path.resolve(__dirname, 'src/@pages'),
			'@ui': path.resolve(__dirname, 'src/@ui'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
};
