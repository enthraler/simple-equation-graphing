var path = require('path');

module.exports = {
    entry: './src/hello.js',
    output: {
        path: './bin',
        filename: 'hello.bundle.js',
        libraryTarget: 'amd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, "node_modules")],
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'less-loader', options: { strictMath: true, noIeCompat: true } }
                ]
            }
        ]
    },
    externals: ['jquery'],
};
