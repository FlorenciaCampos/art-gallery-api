import { Router } from "express";
import { getArtworkById, createArtwork, getAllArtworks } from "../controllers/artworks.controller.js";

const router = Router();

router.get("/:id", getArtworkById);
router.post("/", createArtwork);
router.get("/", getAllArtworks);

export default router;
