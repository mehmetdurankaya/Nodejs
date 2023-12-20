const fs = require("fs");
// Dosya okumak

// fs.readFile("password.txt","utf-8",(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
//     console.log("Dosya Okundu");
// })

//Dosya Yazmak

// fs.writeFile("example.json",'{"Name":"Fatma","age":18}',"utf8", (err)=>{
//     if(err) console.log(err);
//     console.log("JSON Dosya başarlı bir şekilde oluşturuldu")
// });

//Veri Eklemek

// fs.appendFile("example.txt", '\n Kodluyoruz 2222', "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Dosya başarlı bir şekilde eklendi");
// });
//Dosya Silme
// fs.unlink("example.json",(err)=>{
//     if(err) console.log(err);
//     console.log("Dosya silindi");
// })

// Klasörler oluşturmak

// fs.mkdir('uploads/img',{recursive:true},(err)=>{
//     if(err) console.log(err);
//     console.log("Klasörler oluşturuldu");
// })

//Klasörleri silmek

// fs.rmdir("uploads", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   console.log("Klasörler silindi");
// });
