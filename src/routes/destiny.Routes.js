import express from "express";
import DestinyController from "../controllers/DestinyController.js"

const router = express.Router();

router
    .get("/destinations", DestinyController.showDestinations)
    .get("/destinations/:id", DestinyController.showDestinyById)
    .post("/destinations", DestinyController.registerDestiny)
    .put("/destinations/:id", DestinyController.updateDestiny)
    .delete("/destinations/:id", DestinyController.deleteDestiny)

export default router;