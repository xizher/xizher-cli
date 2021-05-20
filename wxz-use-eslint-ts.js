#!/usr/bin/env node

const config = {
  eslintPackages: {
    "eslint": '^7.26.0',
    "@typescript-eslint/eslint-plugin": "^4.24.0",
    "@typescript-eslint/parser": "^4.24.0",
  }
}

const { pathReslove, readFile,  writeFile, rewriteFile, toJsonString } = require('./utils')

async function createEslintrcFile () {
  const templateFilePath = pathReslove('../', __dirname, 'templates', 'eslint-ts.js')
  const eslintrcFilePath = pathReslove('.eslintrc.js')
  const template = await readFile(templateFilePath)
  await writeFile(eslintrcFilePath, template)
}

async function addEslintInPackage () {
  const packageFilePath = pathReslove('package.json')
  await rewriteFile(packageFilePath, txt => {
    const json = JSON.parse(txt)
    if (!json.devDependencies) {
      json.devDependencies = {}
    }
    json.devDependencies = {
      ...config.eslintPackages
    }
    return toJsonString(json)
  })
}

async function init () {
  await createEslintrcFile()
  await addEslintInPackage()
}

init()
