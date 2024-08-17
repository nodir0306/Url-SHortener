import bodyParser from "body-parser";
import express from "express"
import {appConfig} from "./config/app.config.js"

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use("public",express.static("./public"))



app.listen(appConfig.port,()=>{
    console.log(`Server is running on http://${appConfig.host}:${appConfig.port}`)
})