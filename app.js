const http = require('http')
const fs = require('fs')
const url = require('url')

const fontPath = '/assets/SupermercadoOne-Regular.woff2'

const server = http.createServer((req, res) => {
  var base = 'https://' + req.headers.host + '/'
  const parsedUrl = new url.URL(req.url, base)
  console.log('requested: ' + parsedUrl.pathname)
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
  } else if (parsedUrl.pathname === '/index.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    fs.createReadStream('index.css').pipe(res)
  } else if (parsedUrl.pathname === fontPath) {
    res.writeHead(200, { 'content-type': 'font/woff2' })
    fs.createReadStream('.'+fontPath).pipe(res)
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>404 Not Found</h1>')
    res.end
    console.log('404: ' + parsedUrl.pathname);
  }
})

server.listen(process.env.PORT || 3300)