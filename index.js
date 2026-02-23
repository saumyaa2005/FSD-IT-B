// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {

//     if (req.url === '/favicon.ico') {
//         res.end();
//         return;
//     }

//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`
//             <h2 style="text-align:center;">ABESEC College</h2>

//             <div style="text-align:center;">
//                 <img src="https://res.cloudinary.com/jerrick/image/upload/v1742189464/67d7b397fcdfa2001d383e85.jpg" height="200" width="200">
//             </div>
//         `);
//     }
//     else if (req.url === '/college') {
//         res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//         fs.createReadStream('college.jpg').pipe(res);
//     }

//     else if (req.url === '/contact') {
//         res.end('Phone: 9876543210 | Address: Ghaziabad, UP');
//     }

//     // ABOUT
//     else if (req.url === '/about') {
//         res.end('I am the student of ABESEC');
//     }

//     // CLASS
//     else if (req.url === '/class') {
//         res.end('Class: IT-A');
//     }

//     // ERROR
//     else {
//         res.writeHead(404);
//         res.end('404 Page Not Found');
//     }

// });

// server.listen(8000, () => {
//     console.log('Server running on port 8000');
// });

//write file
// const fs= require('fs');

// // fs.writeFileSync("./it-a.txt","We are student of IT-A");
// // fs.writeFileSync("./abesec.txt","We are student of ABESEC College");

// //read file
// const result= fs.readFileSync("./it-a.txt","utf-8");
// console.log(result);

// const fs=require('fs');
// fs.writeFile("./ad.txt","time pass", ()=> {});
// fs.readFile("./ad.txt", "utf-8",(err, result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./ad.txt", " i am happy");
//normal async callback
// fs.appendFile("./ad.txt", " i am happy", (err) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Text appended successfully");
//     }
// });

//if else callback

// fs.appendFile("./ad.txt", " i am happy", (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Append successful");
//     }
// });

// fs.cpSync("./a1.txt", "./b1.txt");
// console.log("file copied successfully");

//fs.unlinkSync("./ad.txt");

//fs node module--form- naviation-- college logo-- fs model for node<h1>-- text box--buttomns-1 fs create/write 2.fs read
const http = require('http');
  const fs=require('fs');
  const home=fs.readFileSync('./abes.html','utf-8');


  const myserver= http.createServer((req,res)=>{
  console.log('Server 1');
  // res.end('Hi,this is my first server');
  res.statusCode=200;
  // res.setHeader('Content-Type','text/plain');
// res.end('hello world!');
res.end(home);

});


myserver.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
});

