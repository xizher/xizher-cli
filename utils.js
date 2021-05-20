const path = require('path')
const fs = require('fs/promises')

const pathReslove = (...args) => path.resolve(...args)
const readFile = filePath => fs.readFile(filePath, { encoding: 'utf-8' })
const writeFile = (filePath, txt) => fs.writeFile(filePath, txt, { encoding: 'utf-8' })

module.exports = {
  pathReslove,
  readFile,
  writeFile,
}