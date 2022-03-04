const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const ABSOLUTE_PATHS = {
	components: path.resolve(__dirname, 'src/components/'),
	context: path.resolve(__dirname, 'src/context/'),
	api: path.resolve(__dirname, 'src/api/'),
	constants: path.resolve(__dirname, 'src/constants/'),
	types: path.resolve(__dirname, 'src/types/'),
	assets: path.resolve(__dirname, 'src/assets/'),
	styles: path.resolve(__dirname, 'src/styles/'),
};

module.exports = (env, { mode }) => {
	const isProduction = mode === 'production';
	return {
		entry: './src/index.tsx',
		output: {
			filename: isProduction ? '[name].[contenthash].js' : 'main.js',
			path: path.resolve(__dirname, 'build'),
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: ABSOLUTE_PATHS,
		},
		devServer: {
			historyApiFallback: true,
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
			new Dotenv(),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
				{
					test: /\.(?:ico|png|jpg|jpeg|ico)$/i,
					type: 'asset/resource',
				},
			],
		},
	};
};
