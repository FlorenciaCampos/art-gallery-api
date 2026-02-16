
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
    try {
     
      const artwork = artworks.find((artwork) => artwork.id === id);
  
     
      return artwork || null;
  
    } catch (error) {
     
      console.error(
        "[MODEL ERROR] Database error while fetching artwork",
        {
          id,
          name: error.name,
          message: error.message,
          stack: error.stack
        }
      );
      throw error;
    }
  };



  export const createArtwork = async (artworkData) => {
    try {
      
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
  
    } catch (error) {
      
      console.error(
        "[MODEL ERROR] Database error while creating artwork",
        {
          name: error.name,
          message: error.message,
          stack: error.stack
        }
      );
      throw error;
    }
  };

  export const getAllArtworks = async () => {
    try {
      return artworks;
    } catch (error) {
      console.error(
        "[MODEL ERROR] Database error while fetching artworks",
        {
          name: error.name,
          message: error.message,
          stack: error.stack
        }
      );
      throw error;
    }
  };

  export const deleteArtworkById = async (id) => {
    try {
      const index = artworks.findIndex(artwork => artwork.id === id);
  
      if (index === -1) {
        return null;
      }
  
      const deletedArtwork = artworks[index];
      artworks.splice(index, 1);
  
      return deletedArtwork;
  
    } catch (error) {
      throw error;
    }
  };
  