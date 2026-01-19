const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("hello dev") 
})

app.get("/user",(req,res)=>{
    res.send("user route")
})

app.get("/userdetail",(req,res)=>{
    let user ={
        name:"karan",
        email:"qwert@123"
    }
    res.status(200).json(user);
});

app.get("/contact",(req,res)=>{
    res.send("contact route")
})
app.get("/address",(req,res)=>{
    res.send("address route")
})
app.get("/about", (req, res) => {
    res.send("about route")
})

app.get("/services", (req, res) => {
    res.send("services route")
})

app.get("/products", (req, res) => {
    res.json({
        products: ["Laptop", "Mobile", "Tablet"]
    })
})

app.get("/profile", (req, res) => {
    res.json({
        username: "karan123",
        role: "developer"
    })
})

app.get("/status", (req, res) => {
    res.status(200).send("server is running fine")
})


app.listen(3000,()=>{
    console.log("server is running")
})
