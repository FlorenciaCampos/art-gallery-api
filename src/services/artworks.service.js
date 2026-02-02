import { getArtworkById } from "../models/artwork.model.js";

export const findArtworkById = (id) => {
  try {
    const artwork = getArtworkById(id);

    // Error de negocio: no existe
    if (!artwork) {
      return null;
    }

    return artwork;
  } catch (error) {
    // Error técnico: algo explotó abajo (DB, bug, etc.)
    throw new Error("Error retrieving artwork");
  }
};

