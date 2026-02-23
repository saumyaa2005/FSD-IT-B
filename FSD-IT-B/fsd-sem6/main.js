function writeFile() {
    const text = document.getElementById("textInput").value;

    fetch("http://localhost:3000/write", {
        method: "POST",
        body: text
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("output").innerText = data;
    });
}

function readFile() {
    fetch("http://localhost:3000/read")
    .then(res => res.text())
    .then(data => {
        document.getElementById("output").innerText = data;
    });
}
