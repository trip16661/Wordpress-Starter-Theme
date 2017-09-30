const merge                   = require( 'webpack-merge' );
const commonConfig            = require( './webpack.common.js' );
const webpack                 = require( 'webpack' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const ExtractTextPlugin       = require( 'extract-text-webpack-plugin' );

module.exports = merge( commonConfig, {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 
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
                })
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify( 'production' )
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
          }),
        new ExtractTextPlugin( "styles.css" )
    ]
});