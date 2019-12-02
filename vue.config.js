module.exports = {
    lintOnSave: false,
    devServer: {
        before: app => {
            app.get('/getList', (req, res) => {
                let data = require('./src/mock/data.json')
                res.send(data)
            })
        }
    }
}