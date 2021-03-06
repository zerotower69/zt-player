const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
    entry: "./examples/index",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //引入vue加载器
    plugins: [new VueLoaderPlugin()],
    module: {
        //webpack要处理.vue .png .jpg .css等文件
        rules: [
            { test: /\.vue$/, loader: "vue-loader" },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8000,
        hot: true,
        static: {
            directory: path.join(__dirname, 'examples'),
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
                secure: true
            }
        }
    },
}