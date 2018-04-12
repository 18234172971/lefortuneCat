var path = require('path');
var webpack = require('webpack');

var APP_PATH = path.resolve(__dirname, './src/app.jsx');
var BUILD_PATH = path.resolve(__dirname, './dist');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 拷贝静态文件
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: [
        APP_PATH,"webpack/hot/only-dev-server"
    ],
    output: {
        path: BUILD_PATH,
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['react','es2015']
                    }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader','css-loader','less-loader']
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
    // devServer: {
    //     hot: true,
    //     inline: true,
    //     proxy: {
    //         '/api/*': {
    //             target: 'http://192.168.1.201:9001',
    //             secure: false,
    //             changeOrigin: true
    //         }
    //     }
    // },
    // plugins: [
    //     new UglifyJSPlugin({
    //         uglifyOptions:{
    //             output: {
    //                 comments: false
    //             },
    //             compress: {
    //                 warnings: false
    //             }
    //         }
    //     }),
    //     new webpack.HotModuleReplacementPlugin() //热加载
    // ]
    plugins: [
        // new UglifyJSPlugin({
        //     uglifyOptions:{
        //         output: {
        //             comments: false
        //         },
        //         compress: {
        //             warnings: false
        //         }
        //     }
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new BundleAnalyzerPlugin()
    ]
};
