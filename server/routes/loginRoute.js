import express from 'express';
import loginApi from '../apis/login'
const app = express() // the main app

app.get('/', function (req, res) {
  console.log(app.mountpath) // /admin
  loginApi.login().then((rs) => {
    res.status(200).json(rs)
  })
})

module.exports = app

