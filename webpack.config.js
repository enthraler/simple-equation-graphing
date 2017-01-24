module.exports = {
    entry: './src/component.js',
    output: {path: './bin', filename: 'component.bundle.js'},
    module: {loaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}]},
};
