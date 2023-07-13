// import Sequelize from "sequelize";

// const db = new Sequelize(
//   process.env.DATABASE_URL || "postgres://localhost:5432/runners",
//   {
//     logging: false,
//   }
// );

// export default db;

import Sequelize from "sequelize";

const db = new Sequelize(
  import.meta.env.VITE_DATABASE_URL || "postgres://localhost:5432/runners",
  {
    logging: false,
  }
);

export default db;
