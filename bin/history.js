module.exports = {
    name: "history",
    desc: "history of infinite shell",
    usage: "history",
    run: () =>{
        
        const fs = require('fs')

        fs.readFile('./OS/logs/ISH/history.txt', 'utf8', (err, data) =>{
            if(err){
                console.log(`an error occured while reading the history of ISH`)
            }else{
                console.log(data)
            }
        })
    }
}