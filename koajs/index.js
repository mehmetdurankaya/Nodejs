const Koa = require("koa");
const app=new Koa();


//Response
app.use((ctx)=>{
  if (ctx.path === "/") {
    ctx.type = "text/html";
    ctx.body = "<h1>welcome to index us page</h1>";
  } else if (ctx.path === "/about") {
    ctx.type = "text/html";
    ctx.body = "<h1>welcome to about us page</h1>";
  } else if (ctx.path === "/contact") {
    ctx.type = "text/html";
    ctx.body = "<h1>welcome to contact us page</h1>";
  }  
  else{
    ctx.type="text/html"
    ctx.body = "<h1>404 Not Found</h1>";
  }
})


const port=5000;
app.listen(port,()=>{
  console.log(`sunucu port ${port} da çalışmaya başladı...`)
});
