const fs =require('fs');
const path = require('path');
// reading a file
const readFile=fs.readFileSync("test.txt")
console.log( "heuyuye"+ readFile)

//write file it will over write the existing file
const writeFile=fs.writeFileSync("test.txt","Dey lusu muttal you can do it yourself")
const readFile2=fs.readFileSync("test.txt")

console.log( " "+ readFile2)

//append file without overwriting existing 

fs.appendFileSync("test.txt", "ipo ith update aganum")
console.log(""+fs.readFileSync("test.txt"))
//jajs
//delete existing file

// fs.unlinkSync("test2.txt")

fs.writeFileSync("test4.txt", "new data file added")
// fs.

