module.exports = (rl) =>{

    const NZTK = require('../../../other/NZTK')

    NZTK.moveFile('./SHELL/temp/NZPM/ISH-history-main/programs/history.js', './SHELL/programs/history.js')
    NZTK.removedir('./SHELL/temp/NZPM/ISH-history')
    return NZTK.log("finished installing history", "NZPM", "installing")
}