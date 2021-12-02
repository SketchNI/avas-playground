const baseConfig = require("./build.base.config")

/**
 * @type {import('electron-builder').Configuration}
 */
const config = {
  ...baseConfig,
  win: {
    icon: "build/icons/build/icons/playground.ico",
    target: [
      {
        target: "zip",
        arch: [
          "x64",
          "ia32"
        ]
      }
    ],
    files: [
      // 'node_modules/7zip-bin/**/*',
      // '!node_modules/7zip-bin/linux/**',
      // '!node_modules/7zip-bin/mac/**'
    ]
  },
}

module.exports = config
