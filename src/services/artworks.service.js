import { getArtworkById } from "../models/artwork.model.js";

export const findArtworkById = (id) => {
  const artwork = getArtworkById(id);

  // Lógica de negocio simple:
  // si no existe, devolvemos null
  if (!artwork) {
    return null;
  }

  return artwork;
};
