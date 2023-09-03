// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

// module.exports=(sequelize,DataTypes)=>{
//     // const post=sequelize.define([
//     //     'require',
//     //     'dependency'
//     // ], function(require, factory) {
//     //     'use strict';
        
//     // });
//     const Posts =sequelize.define(
//         "Posts",{
//             title:{
//                 type:DataTypes.STRING,
//                 allowNull:false
//             },
//             postText:{
//                 type:DataTypes.STRING,
//                 allowNull:false
//             },
//             username:{
//                 type:DataTypes.STRING,
//                 allowNull:false
                
//             },
 
//         }

//     );

//     return Posts
// }




// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

// const Posts = sequelize.define(
//   "Posts",
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     postText: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "posts",
//   },
// );

// module.exports = Posts;




// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("./sequelize"); // Update the path to your sequelize setup file

// const Posts = sequelize.define("Posts", {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   postText: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Posts;




const { Sequelize, DataTypes } = require('sequelize');      

// Replace 'your_dialect_here' with the appropriate dialect for your database
const sequelize = new Sequelize('webdev', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // Specify your database dialect
});

// Define the 'Post' model creting the table 
const Post = sequelize.define("Post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postText: {
        type: DataTypes.TEXT, // Change to TEXT data type
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const table2=sequelize.define("table2",{
    ename:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    }
}
);

module.exports = { sequelize, Post,table2 };
