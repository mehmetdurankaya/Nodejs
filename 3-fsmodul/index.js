global.console.log("Log yazıldı");

global.console.log(__dirname);
// Prints: /Users/mjr
// console.log(path.dirname(__filename));
// Prints: /Users/mjr 

global.setTimeout(()=>{
    console.log("3 saniye beklendi")
},3000);
console.log(window);