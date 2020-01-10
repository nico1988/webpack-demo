'use strict';
const path = require('path');
module.exports = (env, args) => {
    console.log("env:: ", env);
    console.log("args:: ", args);
    console.log("process.env.NODE_ENV:: ", process.env.nodeEnv);
    return {
        mode: 'production',
        entry: {
            index: './src/index.js',
            search: './src/search.js'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: "[name].[hash].js"
        }
    }
};
