// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const express = require('express')

const app = express()

// eslint-disable-next-line no-undef
const baseDir = `${__dirname}/dist`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 3000

app.listen(port, () => console.log(`front-end server is online on http://localhost:${port}`))