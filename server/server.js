const express = require('express');
const cors = require('cors');
const db = require('./db/db-connection.js')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1012;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('You can do hard things, Whitney-Rene')
})

app.listen(PORT, () => {
    console.log(`Estoy escuchando en ${PORT}`)
})