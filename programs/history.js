module.exports = {
    name: "history",
    desc: "history of infinite shell",
    version: "does it really matter 1.0.0?",
    usage: "history",
    run: () =>{
        
        const fs = require('fs')

        fs.readFile('./SHELL/logs/NZSHH/cmdhandler.txt', 'utf8', (err, data) =>{
            if(err){
                console.log(`an error occured while reading the history of minus shell`)
            }else{
                console.log(data)
            }
        })
    }
}
