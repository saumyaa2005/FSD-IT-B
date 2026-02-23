const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/write") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            fs.writeFile("./data.txt", body, (err) => {
                if (err) {
                    res.end("Error writing file");
                } else {
                    res.end("File written successfully");
                }
            });
        });
    }

    else if (req.method === "GET" && req.url === "/read") {
        fs.readFile("./data.txt", "utf-8", (err, data) => {
            if (err) {
                res.end("Error reading file");
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});


// import express from "express"
// import cors from "cors"

// const app = express()

// app.use(cors())
// app.use(express.json())

// let notes = []

// app.post("/create", (req, res) => {
//   const { text } = req.body
//   notes.push(text)
//   res.json({ message: "Note created" })
// })

// app.get("/read", (req, res) => {
//   res.json(notes)
// })

// app.listen(5000, () => {
//   console.log("Backend running on port 5000")
// })

// index.js