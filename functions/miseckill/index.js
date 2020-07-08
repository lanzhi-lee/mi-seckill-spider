/* eslint-disable @typescript-eslint/no-require-imports */
// index.js
const next = require('next')
const serverless = require('serverless-http')

const app = next({ dev: false })
const handle = app.getRequestHandler()

exports.main = async function (...args) {
  await app.prepare()
  return serverless((req, res) => {
    handle(req, res)
  })(...args)
}
