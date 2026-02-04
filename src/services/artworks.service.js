import { getArtworkById } from "../models/artwork.model.js";

export const findArtworkById = (id) => {
  const artwork = getArtworkById(id);    
  
  if (!artwork) {
    return null;
  }

  return artwork;
};
