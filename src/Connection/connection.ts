import dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';

import { Users } from "../Entities/users";

const DATABASE_PORT = process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 5432;

const connection = new DataSource({
    type: "postgres",
    host: "localhost",
    port: DATABASE_PORT,
    username: "postgres",
    password: "root",
    database: "cafe",
    entities: [
        Users
    ],
    synchronize: true,
    logging: false
});

connection.initialize()
    .then( () => {
        console.log("Successful connnection");
    })
    .catch((error) => console.log(error));

export default connection;