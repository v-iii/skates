var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    presets: [
                        [ "latest", { modules: false } ],
                        "stage-2",
                        "react"
                    ],
                    plugins: [
                        "transform-decorators-legacy"
                    ]
                }
            }
        ]
    }
};
