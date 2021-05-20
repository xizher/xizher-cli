#!/usr/bin/env node

const config = {
  tsPackages: {
    "typescript": '^4.2.4',
  },
  tsConfig: {
    "compilerOptions": {
      "experimentalDecorators": true,
      "module": "ES2015",
      "target": "ESNext",
      "sourceMap": false,
      "rootDir":"./src",
      "outDir":"./dist",
      "esModuleInterop":true,
      "declaration": true,
      "skipLibCheck": true,
      "moduleResolution": "node",
      "allowJs": true,
    },
    "include": [
      "src/**/*.ts",
      "src/**/*.js",
    ]
  },
  tsConfigComment: `
// if use alias path
// // ...
// "compilerOptions": {
//   // ...
//   "paths": {
//     "~/*" : ["src/*"],
//     "~hooks/*" : ["src/hooks/*"],
//     "~cp/*" : ["src/components/*"],
//     "~services/*" : ["src/services/*"]
//   }
//   // ...
// }
// // ...
  `
}

const { pathReslove, readFile,  writeFile, rewriteFile, toJsonString } = require('./utils')

async function createTsConfigFile () {
  const tsConfigFilePath = pathReslove('tsconfig.json')
  await writeFile(tsConfigFilePath, toJsonString(config.tsConfig) + config.tsConfigComment)
}

async function addTsInPackage () {
  const packageFilePath = pathReslove('package.json')
  await rewriteFile(packageFilePath, txt => {
    const json = JSON.parse(txt)
    if (!json.devDependencies) {
      json.devDependencies = {}
    }
    json.devDependencies = {
      ...json.devDependencies,
      ...config.tsPackages
    }
    return toJsonString(json)
  })
}

async function init () {
  await createTsConfigFile()
  await addTsInPackage()
}

init()
