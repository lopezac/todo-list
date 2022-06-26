const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        ui: "./src/modules/ui.js",
        task: "./src/modules/task.js",
        todoList: "./src/modules/todoList.js",
        project: "./src/modules/project.js"
        indexStyle: "./src/index-style.css"
    },
    mode: "development",
    plugins: [

    ],
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
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