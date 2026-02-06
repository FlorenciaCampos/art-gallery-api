

import { getArtworkById, createArtwork } from "../models/artwork.model.js";

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


export const createArtworkService = async (artworkData) => {
    try {
      console.log("[SERVICE] Iniciando creación de artwork");
  
      const { title, technique } = artworkData;
  
      
      if (!title || !technique) {
        console.log("[SERVICE] Datos inválidos para crear artwork");
        throw new Error("Title and technique are required");
      }
  
      const newArtwork = await createArtwork({
        title,
        technique
      });
  
      console.log("[SERVICE] Artwork creada correctamente");
      return newArtwork;
  
    } catch (error) {
      console.error(
        "[SERVICE ERROR] Error al crear artwork",
        error
      );
      throw error; 
    }
  };
