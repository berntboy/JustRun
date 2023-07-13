import Sequelize from "sequelize";
import db from "../database.js";

export default db.define("runs", {
  totalMiles: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
  },
  perceivedEffort: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.STRING,
  },
});
