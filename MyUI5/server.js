const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());

// POST request to update the JSON file
app.post("/update-json", (req, res) => {
    const updatedData = req.body;  // Data sent from the frontend

    // Write the updated data to the JSON file
    fs.writeFile("model/mockData/sample.json", JSON.stringify(updatedData, null, 4), (err) => {
        if (err) {
            console.error("Error writing to file", err);
            return res.status(500).send("Failed to update the file.");
        }
        res.send("File updated successfully!");
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
