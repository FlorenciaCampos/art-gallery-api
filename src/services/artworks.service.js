

import { getArtworkById, createArtwork, getAllArtworks, deleteArtworkById  } from "../models/artwork.model.js";

export const findArtworkById = async (id) => {
  try {
    

    const artwork = await getArtworkById(id);

    // No existe → estado válido
    if (!artwork) {
      console.log(`[SERVICE] Artwork id ${id} no encontrado`);
      return null;
    }

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
      
  
      const { title, technique } = artworkData;
  
      
      if (!title || !technique) {
        console.log("[SERVICE] Datos inválidos para crear artwork");
        throw new Error("Title and technique are required");
      }
  
      const newArtwork = await createArtwork({
        title,
        technique
      });
  
    
      return newArtwork;
  
    } catch (error) {
      console.error(
        "[SERVICE ERROR] Error al crear artwork",
        error
      );
      throw error; 
    }
  };



export const findAllArtworks = async () => {
    try {
      const artworks = await getAllArtworks();
  
      // Si no hay registros, es un estado válido → devolvemos array vacío
      return artworks;
  
    } catch (error) {
      // Error técnico (DB, conexión, query, etc.)
      console.error(
        "[SERVICE ERROR] Fallo al obtener la lista de artworks",
        error
      );
      throw error;
    }
  };

  export const deleteArtworkByIdService = async (id) => {
    try {
      return await deleteArtworkById(id);
    } catch (error) {
      throw error;
    }
  };