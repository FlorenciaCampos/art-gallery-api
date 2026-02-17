import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "florencia.campos",
  host: "localhost",
  database: "art_gallery",
  password: "",
  port: 5432,
});

export default pool;
