const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require("./Routes/admin")
const shopRoutes = require("./Routes/shop")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/admin",adminRoutes)
app.use("/shop",shopRoutes)

app.use((req,res,next)=>{
    res.send("Page not found")
})

app.listen(3000);