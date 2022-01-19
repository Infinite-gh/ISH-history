module.exports = {
    name: "history",
    desc: "history of infinite shell",
    usage: "history",
    run: () =>{
        
        const fs = require('fs')

        fs.readFile('./SHELL/logs/NZSHH/history.txt', 'utf8', (err, data) =>{
            if(err){
                console.log(`an error occured while reading the history of minus shell`)
            }else{
                console.log(data)
            }
        })
    }
}
