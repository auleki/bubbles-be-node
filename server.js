import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import clothRoutes from "./routes/cloth.route.js"
import priceRoutes from "./routes/price.route.js"
import orderRoutes from "./routes/order.route.js"
import locationRoutes from "./routes/location.route.js"
import morgan from "morgan";
import cors from "cors";

class Server {
  app = null;
  port = null;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.addRoutes();
    this.connectToDb();
  }

  addMiddleware() {
    this.app.use(cors());
    this.app.use(morgan('dev'))
    this.app.use(express.json());
  }

  addRoutes() {
    this.app.use("/users", userRoutes);
    this.app.use("/locations", locationRoutes)
    this.app.use("/orders", orderRoutes)
    this.app.use("/prices", priceRoutes)
    this.app.use("/cloth", clothRoutes)
  }

  async connectToDb() {
    mongoose.set({ strictQuery: false });
    const dbUrl = process.env.MONGODB_URL || "";
    try {
      console.log("connecting to db...");
      await mongoose.connect(process.env.MONGODB_URL);
      this.startServer();
    } catch (error) {
      console.error("Could not connect to DB", error);
    }
  }

  startServer() {
    this.app.listen(this.port, () =>
      console.log(`Server up at http://localhost:${this.port}`)
    );
  }
}

new Server();
