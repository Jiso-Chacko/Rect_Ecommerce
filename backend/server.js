import express from 'express'
import dotenv from 'dotenv'
import Colors from 'colors'
import connectDB from './config/connection.js'
import Products from './data/Products.js'
const PORT = process.env.PORT || 5000
const app = express()
dotenv.config()
connectDB()

app.get('/api/products',(req,res) => {
    res.json(Products)
})

app.get('/api/products/:id',(req,res) => {

    const product = Products.find((p) => p.id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.underline)
})