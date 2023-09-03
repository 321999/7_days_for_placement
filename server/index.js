const express=require("express");
// here u have created an instance of an express 
const db=require("./models/Post");
const app=express();


// Routers
const postrouter=require("./routes/post.js");
const orders=require("./routes/orders")
app.use("/p",postrouter);

app.use("/order",orders)
// app.use("/",(req,res)=>{
//   res.send("go to the payment page if u have buyed some product so here we can make another middlewar for paytment which is related to order in which how many product he had buyed")
// })

// app.use("p")
console.log(db)

db.sequelize.sync().then(()=>{
  app.listen(8000,()=>{
    console.log("server is running on the porghjgfhjt https://localhost:8000")
  });
});






// const { Sequelize } = require("sequelize");

// // Create a new Sequelize instance and pass in your database connection details
// const sequelize = new Sequelize("web", "root", "Kish@re102", {
//   host: "localhost",
//   dialect: "mysql", // Change to the appropriate database dialect
// });

// // Test the database connection
// sequelize.sync()
//   .then(() => {
//     console.log("Database connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

// module.exports = sequelize;


// const express = require("express");
// const Sequelize = require("sequelize");
// const db = new Sequelize("web", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const app = express();

// db.sync().then(() => {
//   app.listen(8000, () => {
//     console.log("Server is ready to move");
//   });
// });