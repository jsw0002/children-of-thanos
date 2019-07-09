const fs = require('fs')
const path = require('path')

module.exports = (fileName, fileData) => {
  fs.writeFileSync(path.join(__dirname, `../../static/data/${fileName}`), JSON.stringify(fileData))
}
