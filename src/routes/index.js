import express from "express";
import  users from "../routes/user.Routes.js"
import destinations from "../routes/destiny.Routes.js";
import reservations from "../routes/reserve.Routes.js";


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({titulo: "API-TRIP"})
    });

    app.use(
        express.json(),
        users,
        destinations,
        reservations,
    );
};

export default routes;
