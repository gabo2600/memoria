module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path: __dirname+"/docs"
    },
    mode:"production",
    module:{
            rules:[{
                test: /\.js/,
                use:"babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use:["style-loader","css-loader"],
            },
            {
                test: /\.svg/,
                use:['svg-url-loader']
            }
        ]
    }
}
