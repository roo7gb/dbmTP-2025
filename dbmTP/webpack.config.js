const path = require('path');

module.exports = {
    entry: './assets/index.js', //input file path
    output: {
        filename: 'index-bundle.js', //output filename
        path: path.resolve(__dirname, './static'), //django dir path
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
            },
        ]
    }
}

