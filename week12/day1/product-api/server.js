// const { db } = require('./config/dbsql')

// db('products')
//     .select('name')
//     .then(data => {
//     console.log(data);
//     }).catch(err => {
//     console.log(err);
// })

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const product_router = require('./routes/products')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`run on ${process.env.PORT}`);
})

app.use(product_router.router);
