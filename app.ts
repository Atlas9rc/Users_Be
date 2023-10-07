import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connection from './src/Connection/connection';
import { Users } from './src/Entities/users';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

const server = app.listen( process.env.PORT , () => {
    console.log("server running at 3000....")
});

app.get("/api", (req: any, res: any) => {
    connection.manager.find(Users);
    res.send("Welcome to API")
});