const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
    let htmlPlugin = null;

    const config = {
        entry: "./src/index.js",
        target: ["web", "es5"],
        output: {
            filename: "dist.js",
            path: path.resolve(__dirname, "dist")
        },
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(js|jsx)$/i,
                    include: [path.resolve(__dirname, "src")],
                    use: {
                        loader: 'babel-loader',
                        options: {}
                    }
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [new CssMinimizerPlugin()]
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