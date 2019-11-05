const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
//按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css',
  })
)
