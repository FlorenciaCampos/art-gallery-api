import app from "./app.js";
import pool from "./database/db.js";
import { PORT } from "./config/env.js";



// Verificar conexión DB antes de levantar el servidor
pool.query("SELECT NOW()")
  .then(res => {
    console.log("DB connected at:", res.rows[0].now);

    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });
