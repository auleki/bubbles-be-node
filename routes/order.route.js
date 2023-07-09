import { Router } from "express";
import OrderController from "../controllers/order.controller.js"

const router = Router()

const Order = new OrderController()

router.get("/", Order.getAllOrders)
router.get("/:id", Order.getSingleOrder)
router.post("/", Order.createOrder)
router.patch("/:id", Order.editOrder)
router.delete("/:id", Order.deleteOrder)

export default router

