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
// BREAKING CHANGE: fix
//fix number 1
//fix number 2
//fix number 3
//fix number 4
//fix number 5
//fix number 6
//fix number 7
//fix number 8
//fix number 9
//fix number 10
//feat number 1
//feat number 2
//feat number 3
//feat number 4
//feat number 5
//feat number 6
//feat number 7
