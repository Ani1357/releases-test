const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// a new fix
// more fixes

// a feature
// new feature
// another feature
// add fix
// BREAKING CHANGE: fix//fix number 1
//fix number 2
//fix number 3
//fix number 4
