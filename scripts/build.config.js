const baseConfig = require("./build.base.config")

/**
 * @type {import('electron-builder').Configuration}
 */
const config = {
  ...baseConfig,
  nsis: {
    // eslint-disable-next-line no-template-curly-in-string
    artifactName: "${productName}-Setup-${version}.${ext}",
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    perMachine: true,
    differentialPackage: true
  },
  win: {
    icon: "build/icons/playground.ico",
    target: [
      // disable build for x32 by default
      // 'nsis:ia32',
      "nsis:x64",
      // uncomment to generate web installer
      // electron-builder can use either web or offline installer to auto update
      // {
      //   target: 'nsis-web',
      //   arch: [
      //     'x64',
      //   ]
      // },
      {
        target: "zip",
        arch: [
          "x64"
        ]
      }
    ]
  },
  snap: {
    publish: [
      "github"
    ]
  }
}

module.exports = config
