import express from "express";
import { getCars, getCarsById, createCars, updateCars, deleteCars } from "../controllers/usercontroller.js";

const router = express.Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCarsById);
router.post("/cars", createCars);
router.patch("/cars/:id", updateCars);
router.delete("/cars/:id", deleteCars);

export default router;
