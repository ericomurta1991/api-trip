import express from "express";
import ReserveController   from "../controllers/ReserveController.js"

const router = express.Router();

router
    .get("/reservations", ReserveController.showReservations)
    .get("/reservations/:id", ReserveController.showReserveForId)
    .post("/reservations", ReserveController.registerReserve)
    .put("/reservations/:id", ReserveController.updateReserve)
    .delete("/reservations/:id", ReserveController.deleteReserve)


export default router