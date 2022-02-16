import React, { useState, useEffect } from 'react'
import Product from '../components/Products'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'

const Homescreen = () => {

  const [Products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
    <h2>Latest Products</h2>
    <Row>
        {Products.map((Products) => (
            <Col key={Products.id} sm={12} md={6} lg={4} xl={3}>
                <Product products={Products}/>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default Homescreen