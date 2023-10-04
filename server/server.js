require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db-connection.js')

const app = express();
const PORT = process.env.PORT || 1012;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('You can do hard things, Whitney-Rene')
})

app.get('/blogpost', async (req, res) => {
    try {
        const { rows: blogs } = await db.query('SELECT * FROM blogpost');
        //After fetching data from the database, this code sends a response to the client
        res.send(blogs)
    } catch (error) {
        return res.status(400).json({error});
    }

});

app.get('/blogpreview', async (req, res) => {
    // console.log(res);
    try{
        //destructuring assignment syntax  db.query=operation resp for executing sql queryies against db and retunr the result
        const { rows : blogpreview } = await db.query('SELECT blogpost.blog_picture, blogpost.blog_title, blogpost.blog_publishdate, blogpost.blog_id, authors.author_name, authors.author_id FROM blogpost INNER JOIN authors ON blogpost.author_id = authors.author_id');
        //result of query is an object, contains properties=one is a rows property, row property contains an array of rows as a result of sql query
        res.send(blogpreview);
        // console.log(blogpreview);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`Estoy escuchando en ${PORT}`)
})