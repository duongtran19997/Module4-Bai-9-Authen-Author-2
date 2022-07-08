import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/router/router";

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DB_URL ='mongodb+srv://root:Password@cluster0.l1wd2.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(() => {
    console.log('connect to database')
}).catch(err => {
    console.log('error connecting')
    console.log(err.message)
})

app.use("/api", router);

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});