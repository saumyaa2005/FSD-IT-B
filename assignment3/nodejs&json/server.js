//for connecting node with json ...main code
//const http = require("http");
//const fs = require("fs");
//const querystring = require("querystring");
//then http module...http.createServer((req, res) => {})...ye request bhejta or receive krta h
//uske baad...fs module..fs.readFileSync() fs.writeFileSync()...ye json file read or data write krne me kaam aata h
//fhir..(1) browser request bhejta h..http://localhost:3000/users
//(2) node server request ko handle or receive krta h..req.method req.url
//(3) json file read krta h...const data = fs.readFileSync("./data.json");
//(4) data ko parse krta h...data string form me change hota h..like this "[{ \"id\":1, \"name\":\"Saumya\" }]"
//ab is command ki help se xJSON.parse(data) data ko javascrip object bana deta h
//(5) data modiffy hota h..push, delete, update
//(6) dobara json me convert krke(object se json string) file me write kiya jata h
//REST API tab aati hai jab: Browser ya koi client server ko request bhejta hai


const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const filePath = "./data.json";

function readData() {
    return JSON.parse(fs.readFileSync(filePath));
}

function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {

    // 🏠 Home Page (Form)
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h2>Add User</h2>
            <form method="POST" action="/add">
                Name: <input name="name" /><br/><br/>
                Email: <input name="email" /><br/><br/>
                <button type="submit">Add User</button>
            </form>
            <br/>
            <a href="/users">View Users</a>
        `);
    }

    // 🟢 CREATE
    else if (req.method === "POST" && req.url === "/add") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const formData = querystring.parse(body);
            const users = readData();

            const newUser = {
                id: Date.now(),
                name: formData.name,
                email: formData.email
            };

            users.push(newUser);
            writeData(users);

            res.writeHead(302, { Location: "/users" });
            res.end();
        });
    }

    // 🔵 READ
    else if (req.method === "GET" && req.url === "/users") {
        const users = readData();

        res.writeHead(200, { "Content-Type": "text/html" });

        let html = "<h2>Users List</h2>";

        users.forEach(user => {
            html += `
                <p>
                    ${user.name} - ${user.email}
                    <a href="/delete/${user.id}">Delete</a>
                </p>
            `;
        });

        html += `<br/><a href="/">Go Back</a>`;

        res.end(html);
    }

    // 🔴 DELETE
    else if (req.method === "GET" && req.url.startsWith("/delete/")) {
        const id = req.url.split("/")[2];
        let users = readData();

        users = users.filter(user => user.id != id);
        writeData(users);

        res.writeHead(302, { Location: "/users" });
        res.end();
    }

    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
