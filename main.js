const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 760,
    height: 820,
    minWidth: 560,
    minHeight: 650,
    backgroundColor: '#0b1018',
    title: 'OyunSesi',
    autoHideMenuBar: true,
    webPreferences: {
      // Local HTML only; no Node integration in the page.
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  // Ask the user for microphone permission when the app requests it.
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(permission === 'media' || permission === 'microphone');
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
