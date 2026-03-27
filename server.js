const express = require('express');
const sql = require('mssql');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const config = {
    user: 'Koushalyadav1',
    password: 'Yadav@7897.0',
    server: 'sumankoushal.database.windows.net',
    database: 'suman',
    options: {
        encrypt: true
    }
};

app.post('/addStudent', async (req, res) => {
    try {
        await sql.connect(config);
        const { id, name, marks } = req.body;

        await sql.query`INSERT INTO Students VALUES (${id}, ${name}, ${marks})`;

        res.send("Data Inserted");
    } catch (err) {
        res.send(err.message);
    }
});

app.listen(3000, () => console.log("Server running"));