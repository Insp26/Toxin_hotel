const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.pug$/,
                loader: 'pug-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }, {
                test: /\.(png|jp?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                          },
                    }
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: './postcss.config.js' } }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            hash: false,
            template: `${PATHS.src}/index.pug`,
            filename: './index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CopyWebpackPlugin ([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
            { from: `${PATHS.src}/static`, to: '' },
        ]),
    ],
};