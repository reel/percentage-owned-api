import express from "express";
import path from "path";

const app = express();

app.post("/api/auth", (req, res) => {
    console.log(req);
    res.status(400).json({errors: {global: "invalid credentials"}});
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log("Running on Localhost:8080"));