import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router()

const User = new UserController()

router.get("/", User.getAllUsers)
router.get("/:id", User.getSingleUser)
router.post("/", User.createUser)
router.patch("/:id", User.editUser)
router.delete("/:id", User.deleteUser)

export default router

