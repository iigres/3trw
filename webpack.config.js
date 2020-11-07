var path = require('path');

module.exports = {
    entry: './src/index.js', // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка dist
        publicPath: '/dist/',
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
