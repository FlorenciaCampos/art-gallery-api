import { findArtworkById } from "../services/artworks.service.js";

export const getArtworkById = (req, res) => {
  const id = Number(req.params.id);

  // 400 - id inválido
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid artwork id" });
  }

  try {
    const artwork = findArtworkById(id);

    // 404 - no existe
    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    // 200 - ok
    res.json(artwork);
  } catch (error) {
    // 500 - error inesperado
    res.status(500).json({ message: "Internal server error" });
  }
};
