const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: "production",

    // 启用源映射以调试webpack的输出。
    devtool: "source-map",

    entry: "./src/index.tsx",

    resolve: {
        // 将'.ts'和'.tsx'添加为可解析的扩展名。
        extensions: [".ts", ".tsx", ".js"]
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};