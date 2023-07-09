import { Router } from "express";
import LocationController from "../controllers/location.controller.js"

const router = Router()

const Location = new LocationController()

router.get("/", Location.getAllLocations)
router.get("/:id", Location.getSingleLocation)
router.post("/", Location.createLocation)
router.patch("/:id", Location.editLocation)
router.delete("/:id", Location.deleteLocation)

export default router

