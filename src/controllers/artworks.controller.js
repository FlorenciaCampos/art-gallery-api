export const getArtworkById = (req, res) => {
    const { id } = req.params;
  
    const mockArtwork = {
      id: Number(id),
      title: "Mock artwork",
      technique: "Oil on canvas"
    };
  
    res.json(mockArtwork);
  };
  