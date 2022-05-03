module.exports = (rl, user) =>{

    const NZTKc = require('../../../other/NZTK')
    const NZTK = new NZTKc("NZPM", user)
    const fs = require('fs')
    let installed = require('../../../configs/NZPM/toupdate.json')
    
    NZTK.moveFile('./SHELL/temp/NZPM/history/programs/history.js', './SHELL/programs/history.app.js', "there was an error while installing the package history", true)
    NZTK.removedir('./SHELL/temp/NZPM/history')
    
    if(!installed.packages.indexOf("history")) installed.packages.push("history")

    fs.writeFile("./SHELL/configs/NZPM/toupdate.json", JSON.stringify(installed), (err =>{

        if(err) NZTK.log.error(err, 2, "installing")
    }))

    return NZTK.log.success("finished installing history", 2, "installing")
}
