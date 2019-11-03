const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
//按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
)
