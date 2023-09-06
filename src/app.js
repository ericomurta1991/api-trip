import express from "express"
import StatusCodes from "http-status-codes"

import db from "./config/dbConnect.js"

db.once("error", console.log.bind(console, "connection error"));
db.once("open", () => {
    console.log("connection to the database successful")
})


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));


export default app;