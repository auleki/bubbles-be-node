import { Router } from "express";
import ClothController from '../controllers/cloth.controller.js'

const router = Router()

const Cloth = new ClothController()

router.get("/", Cloth.getAllClothes)
router.get("/:id", Cloth.getSingleCloth)
router.post("/", Cloth.createCloth)
router.patch("/:id", Cloth.editCloth)
router.delete("/:id", Cloth.deleteCloth)

export default router

