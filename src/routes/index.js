import express from "express";
import  users from "../routes/user.Routes.js"


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({titulo: "API-TRIP"})
    });

    app.use(
        express.json(),
        users,
    );
};

export default routes;
