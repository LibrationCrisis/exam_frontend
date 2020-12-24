module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 需要代理的url
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}