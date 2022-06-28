import "reflect-metadata";
import app from './app';
import { AppDataSource as db } from './db';

async function main () {
    await db.initialize();
    console.log('Database connected!')
    app.listen(3000, () => console.log('Server run http://localhost:3000'));
}

main();
