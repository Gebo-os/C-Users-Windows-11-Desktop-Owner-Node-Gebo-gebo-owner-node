const { app, BrowserWindow } = require("electron");
const { spawn } = require("child_process");
const path = require("path");

let nextProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    backgroundColor: "#050805",
    title: "Gebo Presence App"
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  nextProcess = spawn("npm", ["run", "dev"], {
    cwd: path.join(__dirname, ".."),
    shell: true,
    stdio: "inherit"
  });

  setTimeout(createWindow, 4000);
});

app.on("window-all-closed", () => {
  if (nextProcess) nextProcess.kill();
  if (process.platform !== "darwin") app.quit();
});
