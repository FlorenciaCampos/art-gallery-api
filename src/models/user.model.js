import pool from "../database/db.js";


export const createUser = async ({ nombre, apellido, email }) => {
  const query = `
    INSERT INTO users (nombre, apellido, email)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
    const values = [nombre, apellido, email];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const getUserById = async ({id}) =>{
    const query = `
    SELECT * FROM users
    WHERE id = $1
 `;
 const values = [id];
 const result = await pool.query(query, values);

 return result.rows[0] || null;
}

export const deleUserById = async (id) => {
    const query = `
      DELETE FROM users
      WHERE id = $1
      RETURNING *;
    `;
  
    const values = [id];
    const result = await pool.query(query, values);
  
    return result.rows[0] || null;
  };

  export const updateUserById = async (id, { nombre, apellido, mail }) => {
    const query = `
      UPDATE users
    SET nombre = $1,
        apellido = $2,
        email = $3,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = $4
    RETURNING *;
    `;
  
    const values = [nombre, apellido, mail];
  
    const result = await pool.query(query, values);
  
    return result.rows[0] || null;
  };