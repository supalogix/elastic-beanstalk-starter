const path = require("path")
const webpack = require('webpack')

module.exports = (env) => ({
    cache: true,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules")
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist/"),
        watchContentBase: true,
        historyApiFallback: true,
        compress: false,
        port: 9009,
        host: "0.0.0.0",
        open: false,
        hot: true,
        inline: true,
        watchOptions: {
            poll: 1000
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "REACT_ENV": JSON.stringify(env.REACT_ENV)
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "./src/"),
                    path.resolve(__dirname, "./packages/")
                ],
                exclude: /node_modules/,
                use: [
                    {
                        loader: "thread-loader",
                    },
                    {
                        loader: "babel-loader",
                        query: {
                            presets: [
                                "@babel/preset-env",
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            }
        ]
    }
})