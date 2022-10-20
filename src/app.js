import express from "express";
import db from "./database";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.initializeDatabase();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  async initializeDatabase() {
    try {
      await db.authenticate();
      console.log("Database connection successful!!");
    } catch (error) {
      console.log(
        "Could not connect to database: ",
        error.message
      );
    }
  }
}

export default new App().server;