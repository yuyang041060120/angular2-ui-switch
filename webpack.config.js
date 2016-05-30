const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        main: './app/main',
        vendor: './app/vendor'
    },
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        root: 'dist',
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /\.d\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ]
};