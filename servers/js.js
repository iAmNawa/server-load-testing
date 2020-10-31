const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  for (let i = 0; i < 100000; i++) {
    // do nothing
  }
  res.send('pizza is out of the oven')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
