const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on this port ${PORT}`));

//a new feature |  a fix |  another fix
