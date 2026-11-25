// Express router keeps the stylist endpoints separate from the server setup.
import { Router } from "express";

import {
    getAllStylists,
    getStylistById,
    createStylist,
    updateStylist,
    deleteStylist
} from "../controllers/stylistController.js";

const router = Router();

//All stylists
router.get("/", getAllStylists);

//Returns stylists by their ID
router.get("/:id", getStylistById);

//Creates a new stylist
router.post("/", createStylist);

//Updates an existing stylist
router.patch("/:id", updateStylist);

//Deletes a stylist
router.delete("/:id", deleteStylist);

export default router;
