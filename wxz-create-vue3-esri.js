#!/usr/bin/env node
const { pathReslove, copyDir } = require('./utils')

async function init () {
  const templateDirPath = pathReslove('../', __dirname, 'templates', 'vue3-esri-project')
  await copyDir(templateDirPath, './')
}

init()
