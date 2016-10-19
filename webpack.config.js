var path = require('path');
var webpack = require('webpack');

// 定义项目中的一些文件夹路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.js')
	},
	output:{
		path: BUILD_PATH,
    	filename: 'bundle.js'
	},
	//允许的后缀
	resolve: {
    	extensions: ['', '.js', '.jsx']
  	},
  	//热更
	devServer: {
	  historyApiFallback:true,
	  hot: true,
	  inline: true,
	  progress: true,
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader:'babel',
			},
			{ 
				test: /\.css$/, loader: 'style!css' 
			},
      		{
        		test: /\.scss$/,
        		loaders : ['style','css','sass']
      		},
	      	{ 
	      		test: /\.(jpe?g|png|gif|svg)$/,
	        	loader: 'url',
	        	query: {limit: 10240}
	      	}
		]
	}
};
