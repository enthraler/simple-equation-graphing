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
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'less-loader', options: { strictMath: true, noIeCompat: true } }
                ]
            }
        ],
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    externals: ['jquery'],
};
