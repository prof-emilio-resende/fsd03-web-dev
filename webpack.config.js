const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    let htmlPlugin = null;

    const config = {
        entry: "./src/index.js",
        output: {
            filename: "dist.js",
            path: path.resolve(__dirname, "dist")
        },
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                }
            ]
        },
        mode: argv.mode
    };

    if (argv.mode === "production") {
        htmlPlugin = new HtmlWebpackPlugin({
            hash: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
            },
            filename: "index.html",
            template: path.resolve(__dirname, "template.html")
        });
    } else {
        config.devtool = 'source-map';
        htmlPlugin = new HtmlWebpackPlugin({
            hash: true,
            minify: false,
            filename: "index.html",
            template: path.resolve(__dirname, "template.html")
        });
    }

    config.plugins.push(htmlPlugin);

    return config;
}