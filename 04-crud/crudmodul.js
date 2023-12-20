const fs = require("fs");

//Dosya oluşturma fonksiyonu
const createFile = () => {
  fs.writeFile(
    "employees.json",
    JSON.stringify([{ name: "Employee 1 Name", salary: 2000 }], null, 2),
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("Json Dosyası oluşturuldu");
    }
  );
};
//Dosya Okuma
const readFile = () =>
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);
    const obj = JSON.parse(data);
    console.log(obj);
    console.log("Dosya Okundu");
  });

//Dosya güncelleme
let updateFile = () =>
  fs.appendFile(
    "employees.json",
    ',\n{"name": "Employee 2 Name", "salary": 3000}',
    "utf8",
    (err) => {
      if (err) console.log(err);
      console.log("Json Dosyası Güncellendi");
    }
  );

//Dosya silme
const deleteFile = () =>
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("Dosya Silme Tamamlandı");
  });

//Dosyaya Yaz
let writeFile = ()=>{
fs.writeFile("example.json", '{"Name":"Fatma","age":18}', "utf8", (err) => {
  if (err) console.log(err);
  console.log("JSON Dosya başarıyla oluşturuldu");
});

}
//Veri Eklemek
const addData = ()=>{
fs.appendFile(
  "employees.json",
  ',\n{"name": "Employee 2 Name", "salary": 3000}',
  "utf8",(err) => {
    if (err) console.log(err);
    console.log("JSON Dosyasına ekleme yapıldı");
  }
);

}

//Klasörler oluşturmak
const createDirector = ()=>{
fs.mkdir("uploads/img", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler oluşturuldu");
});

}

//Klasörleri silmek
const deleteDirectors = ()=>{
fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler silindi");
});

}

//createFile();
//readFile();
//updateFile();
//deleteFile();
//writeFile();
//addData();
//createDirector();
deleteDirectors();
