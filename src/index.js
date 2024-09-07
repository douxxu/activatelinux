const { app, BrowserWindow } = require('electron');
const path = require('path');

function ActLinux() {
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: 400,
    height: 100,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    x: width - 420,
    y: height - 120,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setIgnoreMouseEvents(true);

  win.loadFile(path.join(__dirname, 'html/index.html'));

  win.setAlwaysOnTop(true, 'screen-saver');
}

app.whenReady().then(() => {
  ActLinux();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      ActLinux();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
