const merge             = require( 'webpack-merge' );
const commonConfig      = require( './webpack.common.js' );
const webpack           = require( 'webpack' );

module.exports = merge( commonConfig, {
    devtool: 'eval',
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true, 
        proxy: {
            '**': {
                target: 'http://domain.dev/',
                secure: true,
                changeOrigin: true,
                path: /./
            }
        } 
    },
    module: {
        rules: [            
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', 
                        options: {
                            config: {
                                path: './config/postcss.config.js'
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify( 'development' )
            }
        })
    ]
});
