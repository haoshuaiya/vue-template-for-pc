const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    devServer: {
        proxy: ""
    },
    css: {
        loaderOptions: {
            sass: {
                data: "@import 'src/style/var.scss';"
            }
        },
        sourceMap: true,
        extract: false
    },
    indexPath: "index.twig",
    publicPath:
        process.env.NODE_ENV === "production"
            ? "/catalog/view/theme/tierread_h5/dist/"
            : "/",
    chainWebpack: config => {
        // 图片压缩
        const imagesRule = config.module.rule("images")
        imagesRule
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                bypassOnDebug: true
            })
            .end()
    },
    configureWebpack: config => {
        // 生产环境下对js文件进行gzip压缩
        if (process.env.NODE_ENV === "production") {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$/,
                        threshold: 10240, //对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        }
    },
    productionSourceMap: false
}
