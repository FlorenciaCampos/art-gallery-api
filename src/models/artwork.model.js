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
  
  // Función de acceso a datos
  export const getArtworkById = (id) => {
    return artworks.find((artwork) => artwork.id === id);
  };
  