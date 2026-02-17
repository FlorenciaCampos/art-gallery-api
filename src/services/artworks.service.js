import {
  getArtworkById,
  createArtwork,
  getAllArtworks,
  deleteArtworkById as deleteArtworkByIdModel
} from "../models/artwork.model.js";

export const findArtworkById = async (id) => {
  return await getArtworkById(id);
};

export const findAllArtworks = async () => {
  return await getAllArtworks();
};

export const createArtworkService = async ({ title, technique }) => {
  return await createArtwork({ title, technique });
};

export const deleteArtworkById = async (id) => {
  return await deleteArtworkByIdModel(id);
};
