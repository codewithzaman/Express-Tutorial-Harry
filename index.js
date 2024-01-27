//  NPM is a package manager for Node.js packages, or modules
const express = require('express')
const app = express()
const port = 3000;
const path = require('path')

// app.get('/', (req, res) => {
//   res.send('Hello World! home page')
// })
// app.get('/about', (req, res) => {
//     res.send('Hello World! about page')
//   })
  app.get ('/' , (req,res)=>{
    res.sendFile(path.join(__dirname , 'index.html'))
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})