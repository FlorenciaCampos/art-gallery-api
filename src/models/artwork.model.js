const artworks = [
  {
    id: 1,
    title: "Obra 1",
    technique: "Óleo sobre tela"
  },
  {
    id: 2,
    title: "Obra 2",
    technique: "Acuarela"
  }
];

export const getArtworkById = async (id) => {
  const artwork = artworks.find(a => a.id === id);
  return artwork || null;
};

export const getAllArtworks = async () => {
  return artworks;
};

export const createArtwork = async (artworkData) => {
  const newId =
    artworks.length > 0
      ? artworks[artworks.length - 1].id + 1
      : 1;

  const newArtwork = {
    id: newId,
    ...artworkData
  };

  artworks.push(newArtwork);
  return newArtwork;
};

export const deleteArtworkById = async (id) => {
  const index = artworks.findIndex(a => a.id === id);

  if (index === -1) {
    return null;
  }

  const deletedArtwork = artworks[index];
  artworks.splice(index, 1);

  return deletedArtwork;
};
