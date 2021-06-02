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

async function copyDir (fromDirPath, toDirPath) {
  const list = await fs.readdir(fromDirPath, { withFileTypes: true })
  list.forEach(item => {
    const name = item.name
    const fromPath = pathReslove(fromDirPath, name)
    const toPath = pathReslove(toDirPath, name)
    if (item.isDirectory()) {
      fs.mkdir(toPath)
      copyDir(fromPath, toPath)
    } else {
      fs.copyFile(fromPath, toPath)
    }
  })
}

module.exports = {
  pathReslove,
  readFile,
  writeFile,
  rewriteFile,
  toJsonString,
  copyDir,
}
