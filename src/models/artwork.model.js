// models/artwork.model.js

// Datos mockeados (simulan una base de datos)
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
      // Simula query a DB
      const artwork = artworks.find((artwork) => artwork.id === id);
  
      // Si no existe, NO es error → devuelve null
      return artwork || null;
  
    } catch (error) {
      // Error técnico (DB caída, query fallida, etc.)
      console.error(
        "[MODEL ERROR] Database error while fetching artwork",
        {
          id,
          name: error.name,
          message: error.message,
          stack: error.stack
        }
      );
  
      // 🔥 Propaga el error
      throw error;
    }
  };
  