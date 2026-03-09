import { Router } from "express";
import artworksRoutes from "./artworks.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.use("/artworks", artworksRoutes);
router.use("/users",userRoutes)

export default router;
