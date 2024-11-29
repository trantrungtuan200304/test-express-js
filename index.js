import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import bodyParser from 'body-parser';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use("/users", userRoute);



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})