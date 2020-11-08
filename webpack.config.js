var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // входная точка - исходный файл
    plugins: [
        new HtmlWebpackPlugin({
            //title: '3trw',
            favicon: './src/favicon.ico',
            minify: false,
            templateContent: `<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>3trw</title>     
</head>            
<body>
     <noscript>You need to enable JavaScript to run this app.</noscript>
     <div id="root"></div>
</body>         
</html>`

        }),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка dist
        //publicPath: '/dist/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.(js|jsx)$/, // определяем тип файлов
                //test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]    // используемые пресеты
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],

            },
        ]
    }
}
