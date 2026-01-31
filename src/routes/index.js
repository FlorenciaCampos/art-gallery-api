import { Router } from "express";
import artworksRoutes from "./artworks.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.use("/artworks", artworksRoutes);

export default router;
