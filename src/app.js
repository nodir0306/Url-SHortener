import express from "express";
import bodyParser from "body-parser";
import path from "path";


import { database } from "./mongo/mongo.js";
import { appConfig } from "./config/app.config.js";
import router from "./routes/index.routes.js";
import urlRoutes from "./routes/url.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(process.cwd(),"src","public")));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));


app.use(router)
app.use(urlRoutes)
app.get("/", (req, res) => {
  res.render("index", { shorUrls: [] });
});

async function startServer() {
  try {
    await database();
    app.listen(appConfig.port, () => {
      console.log(`Server is running on http://${appConfig.host}:${appConfig.port}`);
    });
  } catch (error) {
    console.error("db error", error);
  }
}

startServer();
