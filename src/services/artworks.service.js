

import { getArtworkById } from "../models/artwork.model.js";

export const findArtworkById = async (id) => {
  try {
    console.log(`[SERVICE] Buscando artwork con id ${id}`);

    const artwork = await getArtworkById(id);

    // No existe → estado válido
    if (!artwork) {
      console.log(`[SERVICE] Artwork id ${id} no encontrado`);
      return null;
    }

    console.log(`[SERVICE] Artwork encontrado`);
    return artwork;

  } catch (error) {
    // Error técnico que viene del model
    console.error(
      `[SERVICE ERROR] Fallo al obtener artwork id ${id}`,
      error
    );
    throw error; 
  }
};
