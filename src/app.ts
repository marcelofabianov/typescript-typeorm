import express from "express";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', function (req, res) {
    res.json({
        "name": "node-01",
        "version": "1.0.0",
        "main": "index.js",
        "license": "MIT",
        "author": "Marcelo Fabiano",
    }).status(200);
});

export default app;
