require('dotenv').config();
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 


require("./app/router/router.js")(app);
const db = require("./app/config/db.config.js");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop the db and Resync with { force: true }");
});

// create a server
const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at https://%s:%s", host, port);
});
