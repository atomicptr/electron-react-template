const packageJson = require("./package.json")
const packager = require("electron-packager")

// use same version as the one you've installed
const electronPackageJson = require("electron/package.json")

const buildAll = process.argv.indexOf("--all") > 0

let iconExtension = "png"

if(process.platform === "darwin") {
    iconExtension = "icns"
}

if(process.platform === "win32") {
    iconExtension = "ico"
}

let options = {
    dir: ".",
    out: "./builds",
    overwrite: true,
    "app-copyright": packageJson.author,
    "app-version": packageJson.version,
    asar: false,
    electronVersion: electronPackageJson.version,
    //icon: `./assets/icons/icon.${iconExtension}`
}

if(buildAll) {
    options.all = true
} else {
    options.arch = process.arch
    options.platform = process.platform
}

packager(options, (err, paths) => {
    if(err) throw err;

    console.log(paths)
})
