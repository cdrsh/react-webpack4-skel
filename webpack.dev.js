'use strict';


const config = require('./config/dev.js');
module.exports = {

	entry: [
	  	'./src/index.js'
	],

	devtool: 'cheap-inline-module-source-map',

	module: {
	  rules: [
		{
		  test: /\.(js|jsx)$/,
		  exclude: /node_modules/,
		  use: ['babel-loader']
		},

		{
			test: /\.css$/,
			use:[
				{loader:'style-loader'},
				{loader:'css-loader',options:{importLoaders:1}},
                {loader:'postcss-loader'}
			]
		},

		{
			test: /\.less$/,
			use:[
				{loader:'style-loader'},
                {loader:'css-loader',options:{importLoaders:2}},
                {loader:'postcss-loader'},
				//{loader:'postcss-loader',options:{parser:'postcss-safe-parser'}},
				{loader:'less-loader'}
			]
		},
		{
			test: /\.scss$/,
			use:[
				{loader:'style-loader'},
                {loader:'css-loader',options:{importLoaders:2}},
                {loader:'postcss-loader'},
				//{loader:'postcss-loader',options:{parser:'postcss-safe-parser'}},
				{loader:'sass-loader'}
			]
		},
        {
            test: /\.(jpe|jpg)(\?.*$|$)/,
            exclude: /\/node_modules\//,
            use:[{loader: 'url-loader',options:{importLoaders:1,limit:100000}}]
        },

        {
            test: /\.(png|jpg|gif).*$/,
            include: /images/,
            use:[{loader: 'url-loader',options:{importLoaders:1,limit:100000}}]
        },       
		{
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [
			  {
				loader: 'url-loader',
				options: {
				  limit: 65000,
                  mimetype: 'application/font-woff'
				}
			  }
			]
		},
		{
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [
			  { loader: 'file-loader' }
			]
		}

	  ]
	},

	resolve: {
        extensions: ['*', '.js', '.jsx']
	},

	output: {
        path: __dirname + config.dist,
        publicPath: '/',
        filename: 'bundle.js'
	},

	devServer: {
        host: config.server.host,
        port: config.server.clientport,
        contentBase: config.dist,
        historyApiFallback:
        {
            index: '/'
        },
        //hot: true,
        //inline: true,
        proxy:
        [{
            path: '/api',
            target: 'http://'+config.server.host+':'+config.server.port
        }],
        stats:
        {
            colors: true
        }
	}
};
