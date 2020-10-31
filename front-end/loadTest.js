const axios = require('axios')
const fs = require('fs')

let final = {
  success: 0,
  errors: 0,
  count: 0,
  totalMilliseconds: 0
}

function oneTest() {
  axios.get('http://localhost:5000/why-am-i-so-slow')
    .then(res => {
      final.success++
      final.count++
    })
    .catch(err => {
      final.errors++
      final.count++
    })
}

let startTime;

function oneTestLoop() {
  startTime = Date.now()
  for (let i = 0; i < 1000; i++) {
    oneTest()
  }
}

oneTestLoop()

let loadTestIsDone = setInterval(() => {
  if (final.count === 1000) {
    final.totalMilliseconds = Date.now() -  startTime
    clearInterval(loadTestIsDone)
    fs.appendFile(
      './expressResults.txt',
      JSON.stringify(final) + '\n' + '-----------------------' + '\n',
      function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log('the pizza is out of the oven')
        }
      }
    )
    console.log('success: ', final.success)
    console.log('errors: ', final.errors)
    console.log('how long: ', final.totalMilliseconds)
  }
}, 10)
