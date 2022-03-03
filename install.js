module.exports = (rl) =>{

    const NZTK = require('../../../other/NZTK')
    const fs = require('fs')
    let installed = require('../../../configs/NZPM/toupdate.json')
    
    NZTK.moveFile('./SHELL/temp/NZPM/history/programs/history.js', './SHELL/programs/history.js', "there was an error while installing the package history", true)
    NZTK.removedir('./SHELL/temp/NZPM/history')
    installed.packages.push("history")

    return NZTK.log("finished installing history", "NZPM", "installing")
}
