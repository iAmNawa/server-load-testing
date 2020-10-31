const axios = require('axios')
const fs = require('fs')

let success = 0
let errors = 0
let count = 0

function oneTest() {
  axios.get('http://localhost:5000/why-am-i-so-slow')
    .then(res => {
      success++
      count++
    })
    .catch(err => {
      errors++
      count++
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
  if (count === 1000) {
    clearInterval(loadTestIsDone)
    console.log('success: ', success)
    console.log('errors: ', errors)
    console.log('how long: ', Date.now() -  startTime)
  }
}, 10)
