
let users = [];

/* =========================
   POST - Create User
========================= */

export const createUser = async (req, res) => {
  const { nombre, apellido, email } = req.body;


  if (!nombre || !apellido || !email) {
    return res.status(400).json({
      message: "Nombre, apellido and email are required"
    });
  }

  try {
    const newUser = {
      id: users.length + 1,
      nombre,
      apellido,
      email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    users.push(newUser);

    return res.status(201).json(newUser);

  } catch (error) {
    console.error("Error creating user:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};


export const getUserById = async (req, res) => {
    const id = Number(req.params.id);
  
    // Validar que el id sea número
    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid user id"
      });
    }
  
    try {
      const user = users.find(user => user.id === id);
  
      if (!user) {
        return res.status(404).json({
          message: "User not found"
        });
      }
  
      return res.status(200).json(user);
  
    } catch (error) {
      console.error(
        `[CONTROLLER ERROR] Failed to get user with id ${id}`,
        error
      );
  
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  };