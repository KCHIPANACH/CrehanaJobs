const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output:{
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(s*)css$/,
                use:[
                   {loader:MiniCssExtractPlugin.loader} ,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce:'pre',
                test: /\.js$/,
                loader:'source-map-loader'
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: { 
                      name: 'assets/[hash].[ext]',
                      publicPath: './',
                      esModule: false
                    },
                  }
                ],
            },
            {
                test: /\.html$/,
                use: {
                  loader: 'html-loader',
                },
            },         
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin('style.css')
    ],
    devtool:'source-map'
}