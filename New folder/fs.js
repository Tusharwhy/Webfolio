//FS module
const fs = require('fs')                                  //importing fs module

//readFile
/*
fs.readFile('./abcd.txt', (error, data)=>{
    if (error){
        console.log("error");
        console.log(error);
    }else{
        console.log(data.toString());
    }
});
*/


//writeFile
/*
let content = "wow kya file bnayi hai mzza aagyaaa!!"

fs.writeFile('abcd.txt', content,(err)=>{
    if(err){console.log(err);
    } else{
        console.log("saved");
    }

}); 
*/


//appendFile

/*

fs.appendFile("./abcd.txt", "ye mane append kiya bhai", (err)=>{

    if(err){
        console.log("error"+err);

    }else{
        console.log("saved");
    }

});

*/

//deleteFile

fs.unlink("./abcd.txt", (err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("saved");
    }
});e

