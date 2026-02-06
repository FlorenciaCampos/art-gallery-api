import { Router } from "express";
import { getArtworkById, createArtwork } from "../controllers/artworks.controller.js";

const router = Router();

router.get("/:id", getArtworkById);
router.post("/", createArtwork);

export default router;
