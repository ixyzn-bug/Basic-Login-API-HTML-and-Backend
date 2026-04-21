const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); // Allows your HTML file to talk to the API

// Hardcoded credentials for demonstration
const VALID_USER = "admin";
const VALID_PASS = "password123";

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === VALID_USER && password === VALID_PASS) {
        res.status(200).json({ success: true, message: "Login Successful!" });
    } else {
        res.status(401).json({ success: false, message: "Invalid username or password." });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
