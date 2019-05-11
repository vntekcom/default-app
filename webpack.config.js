module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module:{
        rules:[
            {
                loaders:'babel-loader',
                query: {
                    presets:['react','env']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    mode: "development"
};
