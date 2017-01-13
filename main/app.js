const {app, BrowserWindow} = require("electron")
const packageJson = require("../package.json")

app.on("window-all-closed", () => app.quit())

let win = null

app.on("ready", function() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        //icon: __dirname + "/../assets/icons/icon.png"
    })

    win.loadURL("file://" + __dirname + "/../view/app.html");

    win.webContents.on("did-finish-load", () => {
        win.setTitle(app.getName())

        if(process.argv.indexOf("--dev-tools") > 0) {
            win.webContents.openDevTools()
        }
    })

    win.on("closed", () => {
        win = null;
    })
})
