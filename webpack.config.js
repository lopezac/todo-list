const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Todo list"
        }),
    ],
    output: {
        filename: "[name]_bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)/i,
                type: "asset/resource",
            }
        ]
    }
};