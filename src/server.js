import babelify from 'express-babelify-middleware'
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import sassMiddleware from 'node-sass-middleware'
const app = express()
const port = process.env.PORT || 8080
const isProduction = process.env.NODE_ENV === 'production'
const publicDir = path.join(__dirname, '/public')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/js/index.dist.js', babelify('src/public/js/index.js', [], { presets: ['es2015', 'react', 'stage-0'] }))
app.use(sassMiddleware({
  src: path.join(publicDir),
  dest: path.join(publicDir),
  debug: !isProduction,
  outputStyle: isProduction ? 'compressed' : 'extended'
}))

app.use(express.static(publicDir))
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
