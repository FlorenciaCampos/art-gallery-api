import { getArtworkById } from "../models/artwork.model.js";

export const findArtworkById = (id) => {
  return getArtworkById(id);
};
