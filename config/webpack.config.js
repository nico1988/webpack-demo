'use strict';
const path = require("path");

module.exports = {
    /**
     * https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax
     * entry 有多种使用方式  可以使用数组  字符串 对象，其实字符串方式最终就会转化成 对象方式  键名就是main
     */
    // entry: {
    //     index: "./src/index.js",
    //     search: "./src/search.js"
    // },
    entry: {
        main: ['./src/index.js','./src/search.js'],
    },
    // entry: ['./src/index.js','./src/search.js'],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "[name].[hash].js"
    },
    mode: "production"
}
