// 引入path模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

//webpack所有的配置信息
module.exports = {
    mode: "development",
    //  指定入口文件
    entry: "./src/index.ts",
    output: {
        // 生成的路径
        path: path.resolve(__dirname,'dist'),
        // 输出的文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    module: {
        rules: [
            {
                //规则生效的文件
                test: /\.ts$/,
                // 使用的loader设置
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets:[[
                                "@babel/preset-env",
                                //要兼容的浏览器
                                {
                                    targets:{
                                        "ie": "11"
                                    },
                                    //corejs的版本
                                    "corejs":"3",
                                    //使用按需加载
                                    "useBuiltIns":"usage"
                                }
                            ]]
                        }
                    },
                    "ts-loader"
                ],
                // 不需要处理的文件
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions: {
                                plugins:[[
                                    "postcss-preset-env",
                                    {
                                        browsers: "last 2 versions"
                                    }

                                ]]
                                }

                        }

                    },

                    "less-loader"
                ]
            }

        ]

    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //title:'自定义文件'
            template: "./src/index.html"
        }),
    ],
    //设置可以作为模块的文件
    resolve: {
        extensions:['.ts','.js']
    }

}