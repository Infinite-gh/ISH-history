module.exports = (rl) =>{

    const NZTK = require('../../../other/NZTK')
    const fs = require('fs')

    NZTK.moveFile('./SHELL/temp/NZPM/history/programs/history.js', './SHELL/programs/history.js', "there was an error while installing the package history", true)
    NZTK.removedir('./SHELL/temp/NZPM/history')
    fs.appendFile('./SHELL/configs/NZPM/installed.txt', "history", "history", (err) =>{

        console.log(" ")
    })
    return NZTK.log("finished installing history", "NZPM", "installing")
}
