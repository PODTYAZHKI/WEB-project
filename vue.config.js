const path = require('path')
const vueSrc = "./src";
const vueAssets = "./src/assets";
module.exports = {
    // devServer: {
    //     disableHostCheck: true,
    //     port: 8080,
    //     public: '0.0.0.0:8080'
    // },
    // publicPath: "/",
    devServer: {
        host: '127.0.0.1', 
        port: 3000,
        // public: '0.0.0.0:3000'
    }, 
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, vueSrc),
                "~assets": path.resolve(__dirname, vueAssets)
            },
            extensions: ['.js', '.vue', '.json']
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
};
