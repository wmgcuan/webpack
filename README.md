# webpack

全局安装 本地安装

```
webpack src/index.js dist/index.js
webpack --config build/webpack.pro.config.js
```

### package.json

```
"dependencies": {
    "babel-polyfill": "^6.26.0", // 全局垫片为应用准备 npm install babel-polyfill@6.26.0 --save 使用：import "babel-polyfill"
    "@babel/runtime": "^7.0.0-beta.35", // 局部垫片为开发框架准备 npm install @babel/runtime@7.0.0-beta.35 --save 使用：.babelrc
},
"devDependencies": {
    "webpack": "^3.10.0", // npm install webpack@3.10.0 --save-dev
    "babel-loader": "^8.0.0-beta.0", // ES6兼容 npm install babel-loader@8.0.0-beta.0 @babel/core --save-dev
    "@babel/core": "^7.0.0-beta.35",
    "@babel/preset-env": "^7.0.0-beta.35", // babel预设 npm install @babel/preset-env --save-dev
    "@babel/plugin-transform-runtime": "^7.0.0-beta.35", // 局部垫片为开发框架准备 npm install @babel/plugin-transform-runtime@7.0.0-beta.35 --save-dev
},
```

### .babelrc

```
{
  // 预设
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions"]
        }
      }
    ]
  ],
  // 运行时
  "plugins": ["@babel/transform-runtime"]
}
```

### 命令选项

| devtool 选项                 | 配置结果                                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source-map                   | 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的 source map，但是它会减慢打包速度；                                                                                                                                                   |
| cheap-module-source-map      | 在一个单独的文件中生成一个不带列映射的 map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；                                                                                      |
| eval-source-map              | 使用 eval 打包源文件模块，在同一个文件中生成干净的完整的 source map。这个选项可以在不影响构建速度的前提下生成完整的 sourcemap，但是对打包后输出的 JS 文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项； |
| cheap-module-eval-source-map | 这是在打包文件时最快的生成 source map 的方法，生成的 Source Map 会和打包后的 JavaScript 文件同行显示，没有列映射，和 eval-source-map 选项具有相似的缺点；                                                                                               |

| 类别     | loaders                                            |
| -------- | -------------------------------------------------- |
| 编译相关 | babel-loader/ts-loader                             |
| 样式相关 | style-loader/css-loader/less-loader/postcss-loader |
| 文件相关 | file-loader/url-loader                             |

| 类别     | plugins                                                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 优化相关 | CommonsChunkPlugin 提取公共/UglifyjsWebpackPlugin 混淆                                                                                               |
| 功能相关 | ExtractTextWebpackPlugin 样式提取成单独文件/HtmlWebpackPlugin 生成 html/HotModuleReplacementPlugin 模块热更新/CopyWebpackPlugin 拷贝文件到输出文件夹 |
