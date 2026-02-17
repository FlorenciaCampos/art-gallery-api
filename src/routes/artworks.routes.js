import { Router } from "express";
import { getArtworkById, createArtwork, getAllArtworks, deleteArtwork } from "../controllers/artworks.controller.js";

const router = Router();

router.get("/:id", getArtworkById);
router.post("/", createArtwork);
router.get("/", getAllArtworks);
router.delete("/:id", deleteArtwork);


export default router;
