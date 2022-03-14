import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './database'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sucess to render this page!')
});

const port = 8000;

app.listen(port, () => 
    console.log(`Service is running on port: ${port}`)
);