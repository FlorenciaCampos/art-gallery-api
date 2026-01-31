import { Router } from "express";
import { getArtworkById } from "../controllers/artworks.controller.js";

const router = Router();

router.get("/:id", getArtworkById);

export default router;
