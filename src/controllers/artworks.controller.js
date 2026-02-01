import { findArtworkById } from "../services/artworks.service.js";

export const getArtworkById = (req, res) => {
  const id = Number(req.params.id);

  const artwork = findArtworkById(id);

  res.json(artwork);
};

  