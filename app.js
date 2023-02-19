/** packages */

const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middlewar/getIpAdress");
app.use("*", ipFn);

//** methods */
app.get("/", (req, res, next) => {
    res.send("welcome to academi rest_api");
});

const personRoutes = require("./routes/person.routes");
personRoutes(app);
const carRoutes = require("./routes/car.routes");
carRoutes(app);

app.listen(port, () => {
    console.log("server is running...")
});