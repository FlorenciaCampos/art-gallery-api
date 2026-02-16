
import { findArtworkById, createArtworkService,findAllArtworks, deleteArtworkById  } from "../services/artworks.service.js";


export const getArtworkById = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    console.log(`[CONTROLLER] ID inválido recibido: ${req.params.id}`);
    return res.status(400).json({ message: "Invalid artwork id" });
  }

  try {
    console.log(`[CONTROLLER] GET /artworks/${id}`);

    const artwork = await findArtworkById(id);

    if (!artwork) {
      console.log(`[CONTROLLER] Artwork ${id} no encontrado`);
      return res.status(404).json({ message: "Artwork not found" });
    }

    res.json(artwork);

  } catch (error) {
    console.error(
      `[CONTROLLER ERROR] Error inesperado al obtener artwork ${id}`,
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
};


export const createArtwork = async (req, res) => {
  try {
    console.log("[CONTROLLER] POST /artworks");

    const artworkData = req.body;

    if (!artworkData || Object.keys(artworkData).length === 0) {
      console.log("[CONTROLLER] Body vacío o inválido");
      return res.status(400).json({ message: "Request body is required" });
    }

   
    const newArtwork = await createArtworkService(artworkData);

    res.status(201).json(newArtwork);

  } catch (error) {
    console.error(
      "[CONTROLLER ERROR] Error inesperado al crear artwork",
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getAllArtworks = async (req, res) => {
  try {
   

    const artworks = await findAllArtworks();

   
    res.status(200).json(artworks);

  } catch (error) {
    console.error(
      "[CONTROLLER ERROR] Error inesperado al obtener artworks",
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteArtwork = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid artwork id" });
  }

  try {
    const deleted = await deleteArtworkById(id);

    if (!deleted) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    return res.status(200).json(deleted);

  } catch (error) {
    console.error(
      `[CONTROLLER ERROR] Error inesperado al eliminar artwork ${id}`,
      error
    );
    return res.status(500).json({ message: "Internal server error" });
  }
};