const express = require("express");
const path = require("path");

// Variables et config de App
const app = express(); 
const PORT = 8301;

app.use(express.static(path.join(__dirname, "..", "build")));


// Routage

app.get('/download-windows', (req, res) => {
    const filename = "AFK_Simulator_windows.zip"
    res.setHeader(`Content-Disposition', 'attachment; filename="${filename}"`);
    res.sendFile(path.join(__dirname, "..", "..", "staticFiles", filename));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});



// Démarrage server
app.listen(PORT, () => {
    console.log(`serveur démarré sur le port ${PORT}.`)
});