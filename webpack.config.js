const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    entry: {
        main: './app/main'
    },
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'bundle.[chunkhash].js',
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
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        })
    ]
};