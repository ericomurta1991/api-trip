import express from "express";


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({titulo: "API-TRIP"})
    });

    app.use(
        express.json()
    );
};

export default routes;
