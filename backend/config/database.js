import { Sequelize } from "sequelize";

const db = new Sequelize("cvmakerr_db", "postgres", "123", {
  host: "db",
  dialect: "postgres",
});

export default db;
