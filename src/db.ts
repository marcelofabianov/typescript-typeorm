import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "password",
    database: "db",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})
