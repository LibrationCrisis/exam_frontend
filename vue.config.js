module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 需要代理的url
                target: 'http://10.22.136.49:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}