// ------------------------------------------- lec_1

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to Express');
//     res.status(200);
//     res.end();
// });
// app.get('/login', (req, res) => {
//     res.json({ msg: 'Welcome to Login Page' });
//     res.end();
// });
// app.post('/login', (req, res) => {
//     res.send('Welcome to Login Post method');
//     res.end();
// });
// app.listen(2304, () => {
//     console.log('Server is connected at http://localhost:2304');
// });



// ----------------------------------------------- lec_2

// const express = require('express');
// const app = express();
// // const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFilesync('./friend.json', 'utf-8');
// // console.log(data);

// // POST, GET, PUT, PATCH, DELETE
// Server.get("/", (req,res)=>{
//     res.write('Welcome to Express Server');
//     res.end();
// })

// // Server.get("/", (req,res)=>{
// //     res.write('GET Method - 1');
// //     res.end();
// // })

// Server.post("/", (req,res)=>{
//     // res.write('Welcome to Post Method');
//     res.send('<h1>Send Method</h1>');
// })

// server.put("/", (req,res)=>{
//     res.json({message: 'Hello'});
// })

// server.patch("/", (res,req)=>{
//     res.status(400);
//     res.json({message:'Hello'})
// })

// server.get("/user", (req,res)=>{
//     res.json(json.parse(data));
// })

// serever.get("/login", (req,res)=>{
//     res.write('Welcome to Login Page');
//     res.end();
// })

// server.listen(2304, ()=>{
//     console.log('Server Start at http://localhost:2304');   
// })



// ------------------------------------------- lec_3 (Middleware)

// const express = require('express');
// const app = express();
// const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFilesync('./friend.json', 'utf-8');
// console.log(data);

// const Middleware = (req, res, next) => {
//     // console.log(req.query);
//     if(req.query.age >= "19")
//     {
//         console.log('Success');
//         next();        
//     }
//     else
//     {
//         res.json({message: "Sorry....."})
//     }
    
// }

// // server.use(Middleware); //application

// // POST, GET, PUT, PATCH, DELETE
// Server.get("/", (req,res)=>{
//     res.write('Welcome to Express Server');
//     res.end();
// })

// serever.get("/login", Middleware, (req,res)=>{
//     res.write('Welcome to Login Page');
//     res.end();
// })

// Server.post("/", (req,res)=>{
//     // res.write('Welcome to Post Method');
//     res.send('<h1>Send Method</h1>');
// })

// server.listen(2304, () => {
//     console.log('server start at http://localhost:2304');
// })
