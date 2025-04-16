const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// a change in main | a fix
// a feature |  a fix | another fix
// another feature | a fix | a fix 
// a fix | a fix | a fix
// a feature |  a fix | a fix 