module.exports = (rl) =>{

    const NZTK = require('../../../other/NZTK')

    NZTK.moveFile('./SHELL/temp/NZPM/history/programs/history.js', './SHELL/programs/history.js', "there was an error while installing the package history", true)
    NZTK.removedir('./SHELL/temp/NZPM/history')
    return NZTK.log("finished installing history", "NZPM", "installing")
}
