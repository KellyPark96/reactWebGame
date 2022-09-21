const path = require('path');

module.exports = {
    name: 'wordRelay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.jsx', '.js'] // 확장자를 붙이지 않았을 때 찾아줌.
    },
    entry: {
        app: ['./client'],
    }, // 입력
    module: {
        rules: [{
            test: /\.jsx?$/, // js와 jsx에 rule을 적용하겠다.
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'), // dirname => 현재폴더
        filename: 'app.js',
    }, // 출력
};