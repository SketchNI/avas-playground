
/**
 * @type {import('electron-builder').Configuration}
 */
const config = {
  productName: 'Avas Playground',
  appId: 'uk.sketchni.avas-playground',
  electronVersion: process.env.ELECTRON_VERSION, // only used for development debugging
  directories: {
    output: 'build',
    buildResources: 'build',
    app: 'dist'
  },
  publish: [{
    provider: 'github',
    owner: 'sketchni',
    repo: 'avas-playground'
  }],
  files: [
    // don't include node_modules as all js modules are bundled into production js by rollup
    // unless you want to prevent some module to bundle up
    // list them below
  ]
}

module.exports = config
