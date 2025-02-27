const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Users
let users = [{ id: 1, name: "Ravi" }, { id: 2, name: "Smith" }];

// Get users
app.get("/users", (req, res) => {
    res.json(users);
});

// Add a new user
app.post("/users", (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.json(newUser);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
