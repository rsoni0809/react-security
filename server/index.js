import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import jwks from 'jwks-rsa';
import fs from 'fs';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/courses', (req, res) => {
    fs.readFile('./courses.json', 'utf-8', (err, courses) => {
        const response = JSON.parse(courses);
         res.json(response);
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
});
