var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        javascript: "./src/app.tsx",
        html: "./src/index.html",
        vendor: ["jquery", "lodash", "react", "react-dom"]
    },

    // entry: "./src/app.tsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.html$/, loader: "file?name=[name].[ext]" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt 
            //{ from: 'from/file.txt' },
            
            // {output}/to/file.txt 
            { from: './src/styles/tankcalc.css', to: 'styles/tankcalc.css' },
        ], {

        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "jquery": "Jquery",
    //    // "lodash": "Lodash"
    // },
};