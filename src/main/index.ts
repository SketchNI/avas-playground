import { app, BrowserWindow } from 'electron'
import './dialog'
import indexPreload from '/@preload/index'
import indexHtmlUrl from '/@renderer/index.html'
import logoUrl from '/@static/logo.png'

async function main() {
  app.whenReady().then(() => {
    createWindow()
  })
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: indexPreload,
      contextIsolation: true,
      nodeIntegration: true
    },
    icon: logoUrl
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.maximize()

  mainWindow.loadURL(indexHtmlUrl)
  return mainWindow
}

// ensure app start as single instance
if (!app.requestSingleInstanceLock()) {
  app.quit()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

process.nextTick(main)
