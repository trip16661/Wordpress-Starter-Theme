const path = require( 'path' );
           
module.exports = {
    entry: path.resolve( __dirname, '../assets/scripts/bundle.js' ),
    output: {
        filename: "[name].js",
        path: path.resolve( __dirname, '../dist' ),
        publicPath: 'http://localhost:8080/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
				query: {
                    presets: [ 'es2015', 'react' ]
				}
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
    ]
};