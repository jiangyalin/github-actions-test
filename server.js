const path = require('path')
const express = require('express')
const app = express()
const expressStaticGzip = require('express-static-gzip')
const history = require('connect-history-api-fallback')

app.use('/', expressStaticGzip('dist'))

app.use(history({
  verbose: true,
  index: '/'
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(8081, () => {
  console.log('服务启动' + 8081)
})
