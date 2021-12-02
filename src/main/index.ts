import { app, BrowserWindow } from "electron"
import "./dialog"
import indexPreload from "/@preload/index"
import indexHtmlUrl from "/@renderer/index.html"
import logoUrl from "/@static/logo.png"

const { dialog } = require("electron")
const { autoUpdater } = require("electron-updater")

// let updater: any
autoUpdater.autoDownload = false

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

  autoUpdater.checkForUpdatesAndNotify()

  mainWindow.setMenuBarVisibility(false)
  mainWindow.maximize()

  mainWindow.loadURL(indexHtmlUrl)
  return mainWindow
}

// ensure app start as single instance
if (!app.requestSingleInstanceLock()) {
  app.quit()
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

autoUpdater.on("error", (error: any) => {
  console.error("An error occurred getting an update.", error == null ? "unknown" : (error.stack || error).toString())
  dialog.showErrorBox("Error: ", error == null ? "unknown" : (error.stack || error).toString())
})

autoUpdater.on("update-available", () => {
  console.log("An update is available")
  dialog.showMessageBox({
    type: "info",
    title: "A new update is available",
    message: "An update is available. Do you want to update now?",
    buttons: ["Sure", "Nah"]
  }).then((buttonIndex) => {
    console.log(buttonIndex)
    /* if (buttonIndex === 0) {
      console.log("We're installing update")
      autoUpdater.downloadUpdate().then(() => {
        autoUpdater.quitAndInstall()
      })
    } else {
      console.log("Skipping update")
      updater.enabled = true
      updater = null
    } */
  })
})

process.nextTick(main)
