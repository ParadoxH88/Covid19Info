const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './app.js',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: './index.html', to: DIST_DIR}
            ]
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader"
            ]
          },
        ]
    },
    devServer: {
        contentBase: DIST_DIR
    },
}