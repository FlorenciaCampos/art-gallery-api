import {
  findArtworkById,
  createArtworkService,
  deleteArtworkById
} from "../services/artworks.service.js";

/* =========================
   GET by ID
========================= */
export const getArtworkById = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid artwork id" });
  }

  try {
    const artwork = await findArtworkById(id);

    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    return res.status(200).json(artwork);

  } catch (error) {
    console.error(
      `[CONTROLLER ERROR] Failed to get artwork with id ${id}`,
      error
    );
    return res.status(500).json({ message: "Internal server error" });
  }
};

/* =========================
   GET all
   export const getAllArtworks = async (req, res) => {
  try {
    const artworks = await findAllArtworks();
    return res.status(200).json(artworks);

  } catch (error) {
    console.error(
      "[CONTROLLER ERROR] Failed to get artworks",
      error
    );
    return res.status(500).json({ message: "Internal server error" });
  }
};
========================= */


/* =========================
   POST
========================= */
export const createArtwork = async (req, res) => {
  const { title, technique } = req.body;

  if (!title || !technique) {
    return res.status(400).json({
      message: "Title and technique are required"
    });
  }

  try {
    const newArtwork = await createArtworkService({ title, technique });
    return res.status(201).json(newArtwork);

  } catch (error) {
    console.error(
      "[CONTROLLER ERROR] Failed to create artwork",
      error
    );
    return res.status(500).json({ message: "Internal server error" });
  }
};

/* =========================
   DELETE
========================= */
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
      `[CONTROLLER ERROR] Failed to delete artwork with id ${id}`,
      error
    );
    return res.status(500).json({ message: "Internal server error" });
  }
};
