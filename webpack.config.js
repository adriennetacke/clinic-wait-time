const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Clinic Wait Time',
            template: './src/index.ejs'
        })
    ],
    resolve: {
        root: path.resolve('./src')
    }
};

if (process.env.NODE_ENV === 'production') {
    // TODO: Prod Settings
} else {
    config.devtool = 'eval-source-map';
    config.devServer = {
        contentBase: '.',
        historyApiFallback: true,
        host: 'localhost',
        port: 8001
    };
}

module.exports = config;
