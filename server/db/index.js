import db from "./database.js";
import Users from "./models/Users.js";
import Runs from "./models/Runs.js";

Runs.belongsTo(Users);
Users.hasMany(Runs);

export { db, Users, Runs };
