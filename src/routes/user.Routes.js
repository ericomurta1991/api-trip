import express  from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router
    .get("/users", UserController.showUsers)
    .get("/users/:id", UserController.showUsersById)
    .post("/users", UserController.registerUser)
    .put("/users/:id", UserController.updateUser)
    .delete("/users/:id", UserController.deleteUser)


export default router;    