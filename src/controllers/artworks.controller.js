// controllers/artworks.controller.js

import { findArtworkById, createArtworkService } from "../services/artworks.service.js";


export const getArtworkById = async (req, res) => {
  const id = Number(req.params.id);

  // 400 - id inválido
  if (isNaN(id)) {
    console.log(`[CONTROLLER] ID inválido recibido: ${req.params.id}`);
    return res.status(400).json({ message: "Invalid artwork id" });
  }

  try {
    console.log(`[CONTROLLER] GET /artworks/${id}`);

    const artwork = await findArtworkById(id);

    // 404 - no existe
    if (!artwork) {
      console.log(`[CONTROLLER] Artwork ${id} no encontrado`);
      return res.status(404).json({ message: "Artwork not found" });
    }

    // 200 - ok
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

    // Validación mínima a nivel HTTP
    if (!artworkData || Object.keys(artworkData).length === 0) {
      console.log("[CONTROLLER] Body vacío o inválido");
      return res.status(400).json({ message: "Request body is required" });
    }

    // Delego la creación al service
    const newArtwork = await createArtworkService(artworkData);

    // Recurso creado
    res.status(201).json(newArtwork);

  } catch (error) {
    console.error(
      "[CONTROLLER ERROR] Error inesperado al crear artwork",
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
};