const msql=require("mysql2")
const express=require("express")
const cors=require("cors")
const bodyParser = require('body-parser');
const app= express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())

app.get("/",(req,res)=>{
    
    const x=conn.promise()
    x.execute(
        "SELECT * FROM products"
    ).then(([a,b])=>{
    console.log(a)
    res.json(a)
    })


})

app.post("/deleteById",(req,res)=>{
    console.log("delete is worling")

console.log(req.body)
const id=req.body.id

const x=conn.promise()
    x.execute(
        "DELETE FROM `node-app`.`products` WHERE (`id` = "+id+");"
    ).then(([a,b])=>{
    console.log(a)
   
    })

res.redirect("http://localhost:5500/booking_appfdg/")

    
})



app.post("/data",(req,res)=>{
    console.log(req.body,"req.body")

   

    x.execute(
    "INSERT INTO `node-app`.`products` (`name`, `price`) VALUES ('"+req.body.name+"', '"+req.body.mobileNo+"');"
    ).then(([a,b])=>{
    console.log(a,"data is inserted")
    })


    x.execute(
        "SELECT * FROM products"
    ).then(([a,b])=>{
    console.log(a[a.length-1])
    })

    res.redirect("http://localhost:5500/booking_app/")
})





app.listen(4500,()=>{
    console.log("port number is 4500 started")
})



const conn=msql.createPool({
host:"localhost",
user:"root",
password:"123456",
database:'node-app'
})

// console.log(msql)





let x=conn.promise()

x.execute(
    "SELECT * FROM products"
).then(([a,b])=>{
console.log(a[a.length-1])
})