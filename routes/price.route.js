import { Router } from "express";
import PriceController from "../controllers/price.controller.js"

const router = Router()

const Price = new PriceController()

router.get("/", Price.getAllPrices)
router.get("/:id", Price.getSinglePrice)
router.post("/", Price.createPrice)
router.patch("/:id", Price.editPrice)
router.delete("/:id", Price.deletePrice)

export default router

