const path = require('path')
const fs = require('fs/promises')

const pathReslove = (...args) => path.resolve(...args)
const readFile = filePath => fs.readFile(filePath, { encoding: 'utf-8' })
const writeFile = (filePath, txt) => fs.writeFile(filePath, txt, { encoding: 'utf-8' })
const toJsonString = json => JSON.stringify(json, null, 2)

async function rewriteFile (filePath, callback) {
  const txt = await readFile(filePath)
  const newTxt = callback(txt)
  await writeFile(filePath, newTxt)
}

module.exports = {
  pathReslove,
  readFile,
  writeFile,
  rewriteFile,
  toJsonString,
}
