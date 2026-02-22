import pool from "../database/db.js";

export const getArtworkById = async (id) => {
  const query = `
    SELECT * FROM artworks
    WHERE id = $1;
  `;

  const values = [id];
  const result = await pool.query(query, values);

  return result.rows[0] || null;
};


/* =========================
   export const getAllArtworks = async () => {
  const query = `
    SELECT * FROM artworks
  `
}; 
========================= */


export const createArtwork = async ({ title, technique }) => {
  const query = `
    INSERT INTO artworks (title, technique)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const values = [title, technique];

  const result = await pool.query(query, values);

  return result.rows[0];
};

export const deleteArtworkById = async (id) => {
  const query = `
    DELETE FROM artworks
    WHERE id = $1
    RETURNING *;
  `;

  const values = [id];
  const result = await pool.query(query, values);

  return result.rows[0] || null;
};
