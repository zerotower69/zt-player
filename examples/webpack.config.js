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
        rules: [
            { test: /\.vue$/, loader: "vue-loader" }
        ]
    }
}