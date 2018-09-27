const path = require("path");
const Dotenv = require('dotenv-webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// const env = dotenv.config().parsed;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//     prev[ `process.env.${next}` ] = JSON.stringify(env[ next ]);
//     return prev;
// }, {});

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: [ "react", "es2015", "stage-2" ]
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new Dotenv({
            systemvars: true
        })
    ]
};

module.exports = config;
