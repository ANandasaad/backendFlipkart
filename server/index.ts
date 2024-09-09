import express from "express";
import dotenv from "dotenv";
import { NotFound } from "http-errors";
import bodyParser from "body-parser";
import { ConnectDB } from "./database/database";
import customerRoutes from "./routes/customer";
import saleRoutes from "./routes/Sale";
import restaurantRoutes from "./routes/restaurant";
import { ErrorMiddleWare } from "./middlewares/error.middleware";
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", customerRoutes);
app.use("/api", saleRoutes);
app.use("/api", restaurantRoutes);
app.use("*", async (req, res) => {
  throw new NotFound("Not found");
});
app.use(ErrorMiddleWare);
ConnectDB((error: any, message: any) => {
  if (error) {
    console.error("ConnectDB error", error);
  } else {
    console.log(message);
  }
});
app.listen(process.env.PORT, () => {
  console.log(" listening on " + process.env.PORT);
});
