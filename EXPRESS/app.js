const express = require('express');
const app = express();
const port = 8000;

app.get('/', (rea, res)=>{
    res.send("helloooo");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/aboutus', (req, res)=>{
    res.send("This is about us page");
})