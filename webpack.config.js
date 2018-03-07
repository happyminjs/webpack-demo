/**
 * Created by Administrator on 2018/3/6.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry:{
        main:'./main'
    },
    output:{
        path:path.join(__dirname, './dist'),  // 存放打包后文件的输出目录，必填
        publicPath:'/dist/', // 指定资源文件引用的目录
        filename:'main.js'   // 指定输出文件的名称
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:[
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    // 编译.vue文件时，需要对template、script、style分别处理，可用在此处对不同语言配置loaders就好了
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(gif|jpg|png)\??.*$/,
                loader:'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        // 重命名提取后的css文件
        new ExtractTextPlugin("main.css")
    ]

};
module.exports = config;
// export default config