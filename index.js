const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// 
// BREAKING CHANGE: Major rework

// feat: feature 1 (v7.1.0)
// fix: bug fix 1 (v7.1.0) | fix: bug fix 2 (v7.1.0-rc1)