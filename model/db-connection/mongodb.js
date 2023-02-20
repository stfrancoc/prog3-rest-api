/** packages */
const mongoose = require("mongoose")
const config = require("config")

const mongodbInfo = config.get("db-connections.mongodb");

// user: owner_rest-api_user
// pass: rfRBl5hm71miIhwu

//mongodb+srv://owner_rest-api_user:rfRBl5hm71miIhwu@cluster0.gcqff9q.mongodb.net/test

//mongodb+srv://<username>:<password>@cluster0.gcqff9q.mongodb.net/?retryWrites=true&w=majority

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("mongodb server connected!")
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnected!")
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb server connection error!")
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("mongodb server shutting down!")
        });
    });
};