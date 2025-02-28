const express = require("express");
const path = require("path");

// Variables et config de App
const app = express(); 
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static(path.join(__dirname, "..", "downloadFiles")));


// Routage

app.get('/download-windows', (req, res) => {
    const filename = "AFKSimulatorLauncherSetup.exe"
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.sendFile(path.join(__dirname, "..", "downloadFiles", "Launcher", filename));
});
/*
app.get('/download-linux', (req, res) => {
    const filename = "AFKSimulatorLauncherSetup"
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.sendFile(path.join(__dirname, "..", "downloadFiles", "Launcher", filename));
});

app.get('/download-macos', (req, res) => {
    const filename = "AFKSimulatorLauncherSetup"
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.sendFile(path.join(__dirname, "..", "downloadFiles", "Launcher", filename));
});
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});



// Démarrage server
app.listen(PORT, () => {
    console.log(`serveur démarré sur le port ${PORT}.`)
});