const fs = require('fs')
const fileName = 'package.json'

fs.readFile(fileName, function (error, data) {
  if (error) {
    console.log('读取文件失败了')
  } else {
    const textStr = data.toString()
    const version = textStr.match(/\d\.\d\.\d+/)[0]
    if (version) {
      const newVsersionArr = version.split('.')
      newVsersionArr[2] = Number(newVsersionArr[2]) + 1
      const newTextStr = textStr.replace(version, newVsersionArr.join('.'))
      writeFile(newTextStr)
    }
  }
})

function writeFile(newTextStr) {
  fs.writeFile(fileName, newTextStr, function (error) {
    if (error) {
      console.log('写入失败')
    } else {
      console.log('写入成功了')
    }
  })
}