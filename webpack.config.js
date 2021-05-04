const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, ".", "src");

module.exports = {
    entry: {
        content: path.join(srcDir, "content.ts"),
    },
    output: {
        path: path.join(__dirname, "./public"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", "tsx", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "./", context: "public"}],
            options: {},
        }),
    ],
};
