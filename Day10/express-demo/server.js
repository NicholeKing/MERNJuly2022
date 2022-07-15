// We need to express
const express = require('express');
// We need to create an app where everything will run from
const app = express();
// we are going to set up a port
const port = 8000;
// YOU NEED TO HAVE THESE LINES OF CODE FOR POST REQUESTS TO WORK
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This is going to be my example database
const users = [
    {name: "Nichole", favoriteLanguage: "C#"},
    {name: "David", favoriteLanguage: "JavaScript"},
    {name: "Alex", favoriteLanguage: "Java"}
]

app.get("/", (req, res) => {
    res.json(users);
})

app.get("/example", (req,res) => {
    res.json({message: "Hello from the example page!", number: 7});
})

// Let's make a post request
app.post("/post", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    // This must be here or postman hangs forever
    res.json(users);
})

app.get("/users/:id", (req, res) => {
    res.json(users[req.params.id])
})


// We need to start our server up
app.listen(port, () => console.log(`Running on port ${port}!!`));